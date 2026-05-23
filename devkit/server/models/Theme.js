import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  projectType: { type: String, required: true },
  mood: { type: String, required: true },
  colorPreference: { type: String, required: true },
  generatedTheme: {
    colors: {
      primary: String,
      secondary: String,
      accent: String,
      background: String,
      surface: String,
      text: String,
      muted: String,
    },
    fonts: {
      heading: String,
      body: String,
      mono: String,
    },
    cssVariables: String,
    tailwindConfig: String,
  },
}, { timestamps: true });

export default mongoose.model('Theme', themeSchema);
