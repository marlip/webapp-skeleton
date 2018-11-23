require('../css/app.scss');
let $ = require('jquery');
require('bootstrap');

$(function () {
    console.log("ready");

    $('[data-toggle="tooltip"]').tooltip()
});
