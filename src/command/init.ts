/**
 * @author WMXPY
 * @namespace Command
 * @description Init
 */

import { Environment } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";

export const createInitCommand = (env: Environment): Command => {

    return Command.create('init')
        .argument(Argument.create('template'))
        .then(async (inputs: Record<string, string>) => {

            console.log(env);
            console.log(inputs);
        });
};
