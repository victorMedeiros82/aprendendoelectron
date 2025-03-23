const {BrowserWindow,nativeTheme,} = require('electron/main')
const aboutWindow = () => {
    nativeTheme.themeSource = 'dark'
    const about = new BrowserWindow({
    width: 320,
    height: 220,
    resizable: false,
    autoHideMenuBar: true,
    parent: BrowserWindow.getFocusedWindow(),
    modal: true
   
  })

  about.loadFile('./src/views/sobre.html')
}
module.exports = aboutWindow