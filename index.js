const { app, Menu, Tray } = require('electron')

app.whenReady().then(() => {
    let iconpath = 'assets/tray.png'
    if (process.platform === 'darwin') {
        iconpath = 'assets/trayTemplate.png'
    }
    const tray = new Tray(iconpath)
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ])
    tray.setToolTip('Test tray application')
    tray.setContextMenu(contextMenu)
})
