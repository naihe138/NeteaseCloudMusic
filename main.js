
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const isDev = process.env['NODE_ENV'] === 'development'

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    frame: false,
    // backgroundColor: '#2e2c29',
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
      plugins: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  if (isDev) {
    mainWindow.loadURL('http://localhost:8000')
  } else {
    mainWindow.loadFile('dist/index.html')
  }
  // mainWindow.loadURL('http://localhost:8000')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('window-size', (event, arg) => {
  console.log(arg)
  if (arg === 'close') {
    mainWindow.setSize(800, 600, true)
  } else if (arg === 'min') {
    mainWindow.minimize()
  } else {
    mainWindow.maximize()
  }
})
