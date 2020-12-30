/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.on('ready', async () => {
  // let installExtension = require('electron-devtools-installer')
  // installExtension.default(installExtension.VUEJS_DEVTOOLS)
  //   .then(() => {})
  //   .catch(err => {
  //     console.log('Unable to install `vue-devtools`: \n', err)
  //   })

  // 上边的方法因为网络问题无法安装vue_devtools，改用下边的方法
  try {
    BrowserWindow.addDevToolsExtension(path.resolve(__dirname, '../../devTools/chrome'));
  } catch (e) {
    console.error('vue devtools failed to install', e.toString());
  }
})

// Require `main` process to boot app
require('./index')