module.exports = {
  'src/**/*.{ts,js}': ['eslint --fix'],
  'src/**/*.ts': [() => 'tsc --noEmit'],
};
