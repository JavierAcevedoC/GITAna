import Executor from './executor';
import GitCommands from './git-commands';

class GitManager {
    public static BASE = 'git '; //Contains space for make clean the query
    private executor: Executor;

    constructor() {
        this.executor = new Executor();
    }
    
    private async gitBaseMethod(gitQuery: string): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            
            this.executor.execute(GitManager.BASE + gitQuery, (buffer: any) => {
                if (!!buffer) {
                    resolve(String(buffer).split('\n').filter(b => b !== ''));
                } else {
                    reject(new Error('Not yet proccess'));
                }
            });

        });
    }
    
    // JUST READ BUFFERS
    public async branch(): Promise<Array<string>> {
        return this.gitBaseMethod(GitCommands.BRANCH);
    }

    public async pull(): Promise<Array<string>> {
        return this.gitBaseMethod(GitCommands.PULL);
    }
}

export default GitManager
