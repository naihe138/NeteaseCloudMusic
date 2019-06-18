// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// require('./a')

const { ipcRenderer } = require('electron')
const el = id => document.querySelector(`#${id}`)

const big = el('big')
const min = el('min')
const close = el('close')

close.addEventListener('click', () => {
  ipcRenderer.send('window-size', 'close')
})

big.addEventListener('click', () => {
  ipcRenderer.send('window-size', 'big')
})

min.addEventListener('click', () => {
  ipcRenderer.send('window-size', 'min')
})