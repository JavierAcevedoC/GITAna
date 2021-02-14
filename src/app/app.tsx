import React, { Component } from 'react';
//import 'app.scss'; // New import!!
import { ipcRenderer } from 'electron';

interface IStateApp {
    branchs: Array<string>;
}

class App extends Component<any ,IStateApp> {
    constructor(props: any) {
        super(props);

        this.onRecieve();

        this.state = {
            branchs: []
        };
    }

    private onRecieve(): void {
        ipcRenderer.send('get-branchs', '');
        ipcRenderer.on('return-branchs', (event: any, arg:Array<string> ) => {

            this.setState({
                branchs: arg
            });
            
            this.render();
        });
    }

    public render(){
        const littleStyle = {
            color: 'white',
        }
        return (
            <div style={littleStyle}>
                <h1>Branch of this project!</h1>
                <ul>
                    {
                        this.state.branchs.map( (branch: string, index: number) => {
                            return <li key= { index }> { branch } </li>;
                        }
                        )
                    } 
                </ul>
                <h3>By Mr.Cthulhu</h3>
            </div>
        );
    }
}

export default App;
