// Basic code formatter / highlighter utilities

export const formatHTML = (code) => {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export const getLanguageFromType = (type) => {
  const map = { html: 'HTML', react: 'JSX', css: 'CSS', js: 'JavaScript' };
  return map[type] || type.toUpperCase();
};

export const generateImportStatement = (componentName) => {
  return `import ${componentName} from './components/${componentName}';`;
};

export const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};
