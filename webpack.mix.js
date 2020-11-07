
const mix = require('laravel-mix');

mix
    .setPublicPath('./')
    .js('./assets/js/app.js', 'js')
    .sass('./assets/scss/app.scss', 'css');