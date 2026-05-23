import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  category: {
    type: String,
    required: true,
    enum: ['Layout', 'Forms', 'Navigation', 'Feedback', 'Data Display', 'Typography'],
  },
  description: { type: String, required: true },
  htmlCode: { type: String, required: true },
  reactCode: { type: String, required: true },
  cssCode: { type: String, default: '' },
  tags: [String],
  previewType: { type: String, default: 'default' },
  isPopular: { type: Boolean, default: false },
  usageCount: { type: Number, default: 0 },
}, { timestamps: true });

componentSchema.index({ name: 'text', description: 'text', tags: 'text' });

export default mongoose.model('Component', componentSchema);
