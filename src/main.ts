import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev'; // New Import
import GitManager from './electron/core/git-manager';
import Talker from './electron/layers/talker';

let win: BrowserWindow;

const createWindow = (): void => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        title: "GITAna"
    });
    // console.log(isDev);
    win.loadURL(
        isDev
            ? 'http://localhost:8000'
            : `file://${app.getAppPath()}/index.html`,
    );
    isDev ? win.webContents.openDevTools() : null;

    const talker = new Talker(win);
}

app.on('ready', createWindow);
app.setName('GITAna');
