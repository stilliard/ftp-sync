'use strict';

// allow comunication between main process
const ipcRenderer = require('electron').ipcRenderer;

// access methods to minimize / maximize the window
const remote = require('remote');

// bring in jquery
const $ = require('jquery');

// // example message from and back to main process
// var c = 0;
// ipcRenderer.on('message', function (e, arg) {
//     console.log(arg);
//     setTimeout(function () {
//         ipcRenderer.send('message', 'hey ' + ++c);
//     }, 1000);
// });

// // await change events from main process
// ipcRenderer.on('change-test', function (e, arg) {
//     document.getElementById('log').innerHTML += arg.event + ': ' + arg.path + '<br>';
// });

// 
// Top right UI button events
// 
// minimize window
$('#min-btn').on('click', function (e) {
    let window = remote.getCurrentWindow();
    window.minimize();
});
// maximize window
$('#max-btn').on('click', function (e) {
    let window = remote.getCurrentWindow();
    if (window.isMaximized()) {
        window.unmaximize();
    } else {
        window.maximize();
    }
});
// close window
$('#close-btn').on('click', function (e) {
    let window = remote.getCurrentWindow();
    window.close();
});

// 
// Tabs JS
// 
$('.tabs a').on('click', function () {

    let $this = $(this),
        activeTab = $this.attr('href');

    console.log(activeTab);
    $('.tabs li').removeClass('is-active');
    $this.parent().addClass('is-active');

    // hide all current tabs
    $('.tabs-content > div').removeClass('is-active');
    $(activeTab).addClass('is-active');

});

// 
// Render screen
//
function showScreen(name) {
    $('.screen').removeClass('is-active');
    $('#'+ name +'-screen').addClass('is-active');
}

//
// Projects CRUD
//
// click of add project link
$('#add-project').on('click', function (e) {

    // show "add project" form
    showScreen('add-project');

    // ipcRenderer.send('add-project', '');

});
// submit adding a project
$()

// 
// Show welcome message (based on time of day)
// http://stackoverflow.com/questions/13244939/javascript-to-output-text-based-on-users-current-time
// 
var curHr = (new Date()).getHours();
if (curHr < 12) {
      $('#welcome-title').text('Good Morning');
} else if (curHr < 18) {
      $('#welcome-title').text('Good Afternoon');
} else {
      $('#welcome-title').text('Good Evening');
}
