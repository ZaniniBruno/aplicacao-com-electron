const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 800,
        heidt: 800,
        webPreferences: {
            preload: __dirname + '/renderer.js', // Preload script
        },
    });
    
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.plataform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().legth === 0){
        creatwindow();
    }
});