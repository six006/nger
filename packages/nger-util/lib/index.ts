import { exec } from 'shelljs';
import { execSync } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import { ConsoleLogger } from 'nger-logger';
const root = process.cwd()

export interface IConfig {
    npm: 'cnpm' | 'npm' | 'yarn';
}

export class NgerUtil {
    config: IConfig;
    constructor(public logger: ConsoleLogger) { }
    /** 加载配置文件 */
    loadConfig(): IConfig {
        const configPath = join(root, 'config/config.json');
        if (this.config) {
            return this.config;
        }
        if (existsSync(configPath)) {
            this.config = require(join(root, 'config/config.json'));
        }
        return this.config;
    }
    /** 加载包 */
    async loadPkg<T = any>(name: string, attr?: string): Promise<T> {
        let target: any;
        try {
            target = require(name)
        } catch (e) {
            this.logger.debug(`package ${name} not found , now installing.., please wait`)
            await this.addPkg(name).catch(e => {
                this.logger.error(e.message)
            });
            target = require(name);
        }
        if (!!attr) {
            return target[attr];
        }
        return target;
    }
    /** 安装包 */
    addPkg(name: string) {
        let cfg = this.loadConfig();
        let command: string = '';
        if (!cfg) {
            // cnpm 优先
            cfg = cfg || { npm: 'yarn' };
            if (this.shouldUseYarn()) {
                cfg.npm = 'yarn';
            } else if (this.shouldUseCnpm()) {
                cfg.npm = 'cnpm';
            } else {
                cfg.npm = 'npm';
            }
        }
        switch (cfg.npm) {
            case 'yarn':
                command = `yarn add ${name}`
                break;
            case 'cnpm':
                command = `cnpm install ${name}`
                break;
            default:
                command = `npm install ${name}`
                break;
        }
        return this.execAsync(command)
    }
    /** 执行命令 */
    execAsync(command: string) {
        return new Promise((resolve, reject) => {
            exec(command, { cwd: root }, (code, stdout, stderr) => {
                if (!!stderr) {
                    reject(stderr);
                } else {
                    resolve(stdout)
                }
            })
        })
    }
    /** 应该用cnpm */
    shouldUseCnpm(): boolean {
        try {
            execSync('cnpm --version', { stdio: 'ignore' })
            return true
        } catch (e) {
            return false
        }
    }
    /** 应该用yarn */
    shouldUseYarn(): boolean {
        try {
            execSync('yarn --version', { stdio: 'ignore' })
            return true
        } catch (e) {
            return false
        }
    }
}
