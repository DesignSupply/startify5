module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-declaration-sorter')({
      order: 'smacss'
    })
    // require('tailwindcss'),
  ]
};
