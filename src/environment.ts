/**
 * @author WMXPY
 * @namespace Cli
 * @description Environment
 */

import { Config } from "@barksh/config";
import { BarkConfig, Core, Environment } from "@barksh/core";
import { Command } from "@sudoo/coco";

export const config: Config = Config.withDefault();

export const getDefaultConfig = (): BarkConfig => ({

    templates: [],
    sources: [],
});

export const getEnvironment = async (): Promise<Environment> => {

    const env: Environment = Environment
        .create()
        .setConfig(await config.getOrInit(getDefaultConfig()))
        .setPackagePath(config.joinPath('package'))
        .setTemporaryPath(config.joinPath('temp'));

    return env;
};

export const replaceConfig = async (next: Environment): Promise<void> => {

    await config.replace(next.config);
};

export const createPrintCommands = (core: Core): Command[] => {

    return [
        Command.create('s').then(() => console.log(...core.getSources())),
        Command.create('t').then(() => console.log(...core.getTemplates())),
    ];
};
