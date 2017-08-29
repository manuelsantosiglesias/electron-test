const electron = require('electron');
const path = require('path');
const url = require('url');
const {app,BrowserWindow} = electron;


let ventana;

// Podemos integrar el programa en el dock de MACOS
var banderaVentana = 0;// Flag para cuando está en background

// Progress bar mientras se completa la carga
function onProgress (progess) {
  ventana.setProgressBar(progress || -1) // Barra de progreso
}

// Añadimos en el caso de que se cargue

function onDone(){
  var dock = electron.app.dock; // Para el Dock de MacOS
  if(!dock||ventana.isFocused()) return
  banderaVentana++;
}

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
  // Añadimos el menú una vez creada la ventana
  require('./menu/menu');

  // Herramientas de debuging
  ventana.webContents.openDevTools();
};

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
};

// Quitamos en el focus
function onFocus () {
  banderaVentana = 0
  dock.setBadge('')
}

app.on('ready', createWindow);
