import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev'; // New Import

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    },
    title: "GITAna"
  });
  // console.log(isDev);
  win.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${app.getAppPath()}/index.html`,
  );
  isDev ? win.webContents.openDevTools() : null;
}

app.on('ready', createWindow);