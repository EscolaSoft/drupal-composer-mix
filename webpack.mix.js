const THEMEDIR = "./web/themes/custom/qunabu";
let mix = require('laravel-mix');


mix
  .browserSync({
    //open: false,
    proxy: 'localhost:8888',
    //notify: false,
    //stream: true,
    files: [
      `${THEMEDIR}/js/global.js`,
      `${THEMEDIR}/css/*`,
      //`${THEMEDIR}/template/**/*`,
      //'{*,**/*}.php'
    ]
  })
  .sass(`${THEMEDIR}/scss/style.scss`, `${THEMEDIR}/css`)
  .js(`${THEMEDIR}/js/es6/global.js`, `${THEMEDIR}/js`)
  .options({
    processCssUrls: false
  })
  .sourceMaps();
