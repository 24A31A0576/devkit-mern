import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Component from '../models/Component.js';

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const components = [
  {
    name: 'Primary Button',
    slug: 'primary-button',
    category: 'Forms',
    description: 'A styled primary action button with hover and active states.',
    htmlCode: `<button class="btn btn-primary">Click Me</button>`,
    reactCode: `export default function Button({ children, onClick }) {\n  return <button className="btn btn-primary" onClick={onClick}>{children}</button>;\n}`,
    cssCode: `.btn { padding: 0.5rem 1.25rem; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; }\n.btn-primary { background: #6C63FF; color: #fff; }`,
    tags: ['button', 'form', 'action'],
    isPopular: true,
  },
  {
    name: 'Card',
    slug: 'card',
    category: 'Layout',
    description: 'A clean content card with title, body, and optional footer.',
    htmlCode: `<div class="card">\n  <h3 class="card-title">Card Title</h3>\n  <p class="card-body">Card content goes here.</p>\n</div>`,
    reactCode: `export default function Card({ title, children }) {\n  return (\n    <div className="card">\n      <h3 className="card-title">{title}</h3>\n      <div className="card-body">{children}</div>\n    </div>\n  );\n}`,
    cssCode: `.card { background: #1A1D27; border: 1px solid #252836; border-radius: 10px; padding: 1.25rem; }`,
    tags: ['card', 'layout', 'container'],
    isPopular: true,
  },
  {
    name: 'Badge',
    slug: 'badge',
    category: 'Data Display',
    description: 'Status badges in success, warning, and error variants.',
    htmlCode: `<span class="badge badge-success">Active</span>`,
    reactCode: `export default function Badge({ variant = 'success', children }) {\n  return <span className={\`badge badge-\${variant}\`}>{children}</span>;\n}`,
    cssCode: `.badge { padding: 0.2rem 0.6rem; border-radius: 100px; font-size: 0.75rem; font-weight: 600; }\n.badge-success { background: rgba(0,217,163,0.15); color: #00D9A3; }`,
    tags: ['badge', 'status', 'label'],
    isPopular: true,
  },
];

await Component.deleteMany({});
await Component.insertMany(components);
console.log('Database seeded with', components.length, 'components');
process.exit(0);
