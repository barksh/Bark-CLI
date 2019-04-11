/**
 * @author WMXPY
 * @namespace Command
 * @description Install
 */

import { Core } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";

export const createInstallCommand = (core: Core): Command => {

    return Command.create('install')
        .argument(Argument.create('template'))
        .then(async (inputs: Record<string, string>) => {

            console.log(core);
            console.log(inputs);

            console.log(await core.installFromSource(inputs.template));
        });
};
