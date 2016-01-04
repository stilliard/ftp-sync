'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Report crashes to our server.
electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// let c = 0;
// electron.ipcMain.on('message', function(event, arg) {
//     console.log(arg);  // prints "ping"
//     setTimeout(function () {
//       event.sender.send('message', 'hi ' + ++c);
//     }, 1000);
// });

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 600,
      height: 600,
      frame: false, // hide default browser frame
      resizable: true, // allow user to resize the window,
      icon: __dirname + '/assets/logo.png'
  });

  // min size the user can resize to
  mainWindow.setMinimumSize(300, 300);

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // mainWindow.webContents.on('dom-ready', function () {
  //     mainWindow.webContents.send('message', 'hi');
  // });

  // Auto open the DevTools on load
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

});

// // Begin watching directories
// const chokidar = require('chokidar');
// const watcher = chokidar.watch(__dirname + '/test-dir', {
//     ignored: /[\/\\]\./,
//     persistent: true,
//     ignoreInitial: true // don't fire on existing files, only changes from now onwards
// });
// watcher.on('all', function (event, path) {
//     console.log(event, path);
//     mainWindow.webContents.send('change-test', {
//         event,
//         path
//     });
// });
