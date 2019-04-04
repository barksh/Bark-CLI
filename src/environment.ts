/**
 * @author WMXPY
 * @namespace Cli
 * @description Environment
 */

import { Config } from "@barksh/config";
import { BarkConfig, Environment } from "@barksh/core";
import * as Path from "path";

export const getDefaultConfig = (): BarkConfig => ({

    templates: [],
    sources: [],
});

export const getEnvironment = async (): Promise<Environment> => {

    const config: Config = Config.withDefault();

    console.log(config.path);

    const env: Environment = Environment
        .create()
        .setConfig(await config.getOrInit(getDefaultConfig()))
        .setPackagePath(config.joinPath('package'))
        .setTemporaryPath(config.joinPath('temp'));

    return env;
};
