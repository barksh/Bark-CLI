/**
 * @author WMXPY
 * @namespace Command
 * @description Init
 */

import { Core } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";

export const createInitCommand = (core: Core): Command => {

    return Command.create('init')
        .argument(Argument.create('template'))
        .then(async (inputs: Record<string, string>) => {

            console.log(core);
            console.log(inputs);

            console.log(await core.attemptFindTemplate(inputs.template));
        });
};
