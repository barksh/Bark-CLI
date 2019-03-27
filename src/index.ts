/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Environment } from "@barksh/core";
import * as Program from "commander";
import { getEnvironment } from "./environment";

export const BarkCli = (args: string[]) => {

    const env: Environment = getEnvironment();

    Program.version('0.0.1');

    Program
        .command('env', 'Print environment information')
        .action(() => {
            console.log(env);
        });

    Program
        .command('ping', 'Pong')
        .action(() => {
            console.log('Pong');
        });

    Program.parse(args);
};

export default BarkCli;
