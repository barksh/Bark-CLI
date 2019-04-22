/**
 * @author WMXPY
 * @namespace Command
 * @description Source
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";
import { replaceConfig } from "./environment";

export const createSourceCommands = (core: Core): Command[] => {

    return [
        Command.create('source')
            .argument(Argument.create('source'))
            .then(async (inputs: Record<string, string>) => {

                const newEnvironment: Environment = await core.addSource(inputs.source);
                await replaceConfig(newEnvironment);
            }),
    ];
};
