import asyncHandler from 'express-async-handler';
import Anthropic from '@anthropic-ai/sdk';
import Theme from '../models/Theme.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// POST /api/theme/generate
export const generateTheme = asyncHandler(async (req, res) => {
  const { projectType, mood, colorPreference } = req.body;
  if (!projectType || !mood || !colorPreference) {
    res.status(400);
    throw new Error('Please provide projectType, mood, and colorPreference');
  }

  const prompt = `You are a professional UI/UX designer creating a design system theme.
Generate a color palette and typography for:
- Project Type: ${projectType}
- Mood/Vibe: ${mood}
- Color Preference: ${colorPreference}

Respond ONLY with a valid JSON object (no markdown, no extra text):
{
  "colors": {
    "primary": "#hex",
    "secondary": "#hex",
    "accent": "#hex",
    "background": "#hex",
    "surface": "#hex",
    "text": "#hex",
    "muted": "#hex"
  },
  "fonts": {
    "heading": "Google Font Name",
    "body": "Google Font Name",
    "mono": "Google Font Name"
  },
  "cssVariables": "--color-primary: #hex; --color-secondary: #hex; ...",
  "rationale": "Brief 1-sentence explanation of the theme"
}`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = message.content[0].text;
  const themeData = JSON.parse(responseText);

  // Generate Tailwind config string
  themeData.tailwindConfig = `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${themeData.colors.primary}',
        secondary: '${themeData.colors.secondary}',
        accent: '${themeData.colors.accent}',
      },
      fontFamily: {
        heading: ['${themeData.fonts.heading}', 'sans-serif'],
        body: ['${themeData.fonts.body}', 'sans-serif'],
      }
    }
  }
}`;

  // Save to DB if user is logged in
  let savedTheme = null;
  if (req.user) {
    savedTheme = await Theme.create({
      user: req.user._id,
      projectType,
      mood,
      colorPreference,
      generatedTheme: themeData,
    });
  }

  res.json({ theme: themeData, savedId: savedTheme?._id });
});

// GET /api/theme/history
export const getThemeHistory = asyncHandler(async (req, res) => {
  const themes = await Theme.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(10);
  res.json(themes);
});
