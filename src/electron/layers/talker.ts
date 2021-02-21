import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import GitManager from '../core/git-manager';
import { Observable, Subject } from 'rxjs';
import { IEventsNames, IReturnEventNames } from '../../shared/types/event-types';


class Talker {

    public static readonly allEventNames: Array<IEventsNames> = ['pull', 'get-branchs'];

    public git = new GitManager();
    private branchListenerSubject: Subject<Array<string>> = new Subject();
    private pullListenerSubject: Subject<Array<string>> = new Subject();

    constructor(win: BrowserWindow) {
        this.listnersEventsName(win);
    }

    private listnersEventsName(win: BrowserWindow): void {
        Talker.allEventNames.forEach(name =>
            this.listenEvent(name).subscribe(
                buffer => {
                    win.webContents.send(this.onEventName(name), buffer);
                }
            )
        );
    }

    private listenEvent(eventName: IEventsNames): Observable<Array<string>> {

        ipcMain.on(eventName, (event: IpcMainEvent, arg: string | []) => {

            switch (eventName) {
                case 'get-branchs': {
                    this.git.branch().then(branchs => {
                        this.branchListenerSubject.next(branchs);
                    });
                }
                case 'pull': {
                    this.git.pull().then(buffer => {
                        this.pullListenerSubject.next(buffer);
                    });

                }
            }
        });

        return this.onListenEvent(eventName); 
    }

    private onListenEvent(name: IEventsNames): Observable<Array<string>> {
       return name === 'pull' ? this.pullListenerSubject :
            name === 'get-branchs' ? this.branchListenerSubject : 
            new Subject();
    }

    private onEventName(eventName: IEventsNames): IReturnEventNames {
        switch (eventName) {
            case 'get-branchs': {
                return 'return-branchs';
            }
            
            case 'pull': {
                return 'return-pull';
            }

            default:
                return '';
        }
    }
}
export default Talker;
