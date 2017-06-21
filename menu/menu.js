const {Menu} = require ('electron')
const electron = require ('electron')
const app = electron.app
var i18n = new (require('../translation/i18n'))

const template = [
  {
    label: i18n.__('Edit'),
    submenu: [
      {
        role: 'undo', label: i18n.__('Undo')
      },
      {
        role: 'redo', label: i18n.__('Redo')
      },
      {
        type: 'separator'
      },
      {
        role: 'cut', label: i18n.__('Cut')
      },
      {
        role: 'copy', label: i18n.__('Copy')
      },
      {
        role: 'paste', label: i18n.__('Paste')
      },
      {
        role: 'delete', label: i18n.__('Delete')
      },
      {
        role: 'selectall', label: i18n.__('Select all')
      }
    ]
  },
  {
    label: i18n.__('View'),
    submenu: [
      {
        role: 'resetzoom', label: i18n.__('Actual size')
      },
      {
        role: 'zoomin', label: i18n.__('Zoom in')
      },
      {
        role: 'zoomout', label: i18n.__('Zoom out')
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen', label: i18n.__('Toggle fullscreen')
      }
    ]
  },
  {
    role: 'window', label: i18n.__('Window'),
    submenu: [
      {
        role: 'minimize', label: i18n.__('Minimize')
      },
      {
        role: 'close', label: i18n.__('Close')
      }
    ]
  },
  {
    role: 'help', label: i18n.__('Help'),
    submenu: [
      {
        label: i18n.__('About Me'),
        click () { require('electron').shell.openExternal('https://github.com/manuelsantosiglesias/electron-test') }
      }
    ]
  }
]


// Darwin Menu sin hacer
if (process.platform === 'darwin') {

}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
