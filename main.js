const { app, BrowserWindow } = require('electron');

let width = 620;
let height = 620;

function createWindow () {
  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('frontend/index.html');
  win.webContents.openDevTools();
  win.setSize(width, height);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});