/**
 * @author WMXPY
 * @namespace Cli
 * @description Environment
 */

import { getOrInitConfig } from "@barksh/config";
import { BarkConfig, Environment } from "@barksh/core";
import * as Path from "path";

export const getDefaultConfig = (): BarkConfig => ({

    templates: [],
    sources: [],
});

export const getConfigFile = async (): Promise<BarkConfig> => {

    const config: BarkConfig = await getOrInitConfig(getDefaultConfig());

    return config;
};

export const getEnvironment = async (): Promise<Environment> => {

    const appDataPath = Path.resolve('./test_barksh');

    const env: Environment = Environment
        .create()
        .setConfig(await getConfigFile())
        .setPackagePath(Path.join(appDataPath, 'package'))
        .setTemporaryPath(Path.join(appDataPath, 'temp'));

    return env;
};
