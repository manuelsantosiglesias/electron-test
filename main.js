const electron = require('electron')
const path = require('path')
const url = require('url')
const {app,BrowserWindow} = electron

let ventana

function createWindow(){
  ventana = new BrowserWindow(
    {
      width: 800,
      heigth: 600
    }
  )

  ventana.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'), // pathname: require('path').join(__dirname, 'index.html')
    protocol: 'file',
    slashes: true
  }))
  // Herramientas de debuging
  ventana.webContents.openDevTools()
}

// Exportamos la función y podemos llamarla desde la vista
exports.openWindow = () => {
  let nuevaVentana= new BrowserWindow ({
    width: 400, heigth: 400
  })
  nuevaVentana.loadURL(url.format({
    pathname: path.join(__dirname, 'ventana2.html'),
    protocol: 'file',
    slashes: true
  }))
}

app.on('ready',createWindow)
