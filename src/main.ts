import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev'; // New Import
import GitManager from './electron/core/git-manager';

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

}

app.on('ready', createWindow);
app.setName('GITAna');
const git = new GitManager();

ipcMain.on('get-branchs', (event: any, arg: any) => {

    const getBranchs = git.branch().then(branchs => {
        win.webContents.send('return-branchs', branchs);
        event.returnValue = getBranchs;
    });

});

