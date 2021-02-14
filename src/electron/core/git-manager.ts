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
            
            this.executor.execute(gitQuery, (buffer: any) => {
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
        const gitQuery = GitManager.BASE + GitCommands.BRANCH;
        return this.gitBaseMethod(gitQuery);
    }

    public async pull(): Promise<Array<string>> {
        const gitQuery = GitManager.BASE + GitCommands.PULL;
        return this.gitBaseMethod(gitQuery);
    }
}

export default GitManager