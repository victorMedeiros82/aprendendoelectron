const { app, BrowserWindow,nativeTheme,} = require('electron/main');
const createMenu = require ('./src/public/js/menu');
const createWindow = () => {
    nativeTheme.themeSource = 'dark'
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
  })

  win.loadFile('./src/views/index.html')
}
//chama o menu
createMenu()

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})