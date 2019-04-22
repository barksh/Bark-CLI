/**
 * @author WMXPY
 * @namespace Command
 * @description Install
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";
import { replaceConfig } from "./environment";

export const createInstallCommand = (core: Core): Command => {

    return Command.create('install')
        .argument(Argument.create('template'))
        .then(async (inputs: Record<string, string>) => {

            console.log(inputs);

            const newEnvironment: Environment = await core.installFromSource(inputs.template);
            await replaceConfig(newEnvironment);
        });
};

export const createTemplateCommands = (core: Core): Command[] => {

    return [
        Command.multiple('template', 'remove')
            .argument(Argument.create('query'))
            .then(async (inputs: Record<string, string>) => {

                const newEnvironment: Environment = await core.removeTemplate(inputs.query);
                await replaceConfig(newEnvironment);
            }),
    ];
};
