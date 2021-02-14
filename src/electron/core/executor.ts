import { exec } from 'child_process';

class Executor {

    public async execute(command: any, callback: any): Promise<any> {
        return await exec(command, (error: any, stdout: any, stderr: any) => { 
            return callback(stdout); 
        }).stdout?.read();
    }
}

export default Executor;
