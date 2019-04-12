/**
 * @author WMXPY
 * @namespace Command
 * @description Update
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";
import { replaceConfig } from "./environment";

export const createUpdateCommand = (core: Core): Command => {

    return Command.create('update')
        .argument(Argument.create('name').optional())
        .then(async (inputs: Record<string, string>) => {

            const newEnv: Environment = await core.updateAllSources();
            await replaceConfig(newEnv);
        });
};
