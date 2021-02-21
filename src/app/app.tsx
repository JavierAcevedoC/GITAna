import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import ListBranchs from './ui/elements/list-branchs';

interface IStateApp {
    branchs: Array<string>;
}

class App extends Component<any ,IStateApp> {
    constructor(props: any) {
        super(props);

        this.state = {
            branchs: []
        };

        this.onRecieve();
    }

    private onRecieve(): void {
        ipcRenderer.send('get-branchs', '--all');
        ipcRenderer.on('return-branchs', (event: any, arg:Array<string> ) => {

            this.setState({
                branchs: arg
            });
            
        });
    }

    public callPull(): void {
        ipcRenderer.send('pull', '');
        ipcRenderer.on('return-pull', (ev: any, arg: string | []) => {
            //TODO set state?
        });
    }
    
    public render(){
        const littleStyle = {
            color: 'white',
        }
        return (
            <div style={littleStyle}>
                <Button color="primary" onClick={ () => this.onRecieve() }>call branchs</Button>
                <Button color="primary" onClick={ () => this.callPull() }>call pull</Button>

                <ListBranchs branchs={ this.state.branchs.map(b => b) }/>
            </div>
        );
    }
}

export default App;
