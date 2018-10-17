const THEMEDIR = "./web/themes/custom/qunabu";
let mix = require('laravel-mix');

mix.sass(`${THEMEDIR}/scss/style.scss`, `${THEMEDIR}/css`);
mix.options({
  processCssUrls: false
});