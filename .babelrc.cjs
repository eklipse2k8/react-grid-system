module.exports = {
  ignore: ['node_modules/**/*'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    // '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-proposal-object-rest-spread',
  ],
};
