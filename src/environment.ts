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

    const appDataPath = Path.resolve('./test_barksh');
    const config: Config = Config.withDefaultPath();

    const env: Environment = Environment
        .create()
        .setConfig(await config.getOrInit(getDefaultConfig()))
        .setPackagePath(Path.join(appDataPath, 'package'))
        .setTemporaryPath(Path.join(appDataPath, 'temp'));

    return env;
};
