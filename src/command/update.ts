/**
 * @author WMXPY
 * @namespace Command
 * @description Update
 */

import { Core } from "@barksh/core";
import { Command } from "@sudoo/coco";

export const createUpdateCommand = (core: Core): Command => {

    return Command.create('update')
        .then(async (inputs: Record<string, string>) => {

            console.log(await core.update());
        });
};
