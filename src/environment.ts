/**
 * @author WMXPY
 * @namespace Cli
 * @description Environment
 */

import { Environment } from "@barksh/core";
import * as Path from "path";

export const getEnvironment = (): Environment => {

    const appDataPath = Path.resolve('./test_barksh');

    const env: Environment = Environment
        .create()
        .setConfig({
            templates: [],
            sources: [
                {
                    url: 'http://www.mocky.io/v2/5c9a995a3500004c00d0c6f8',
                    lastUpdate: new Date(),
                    structure: {
                        templates: [{
                            name: 'test',
                            url: 'github://WMXPY/Ghoti-CLI-templates/master/dist/react-ssr.zip',
                            version: '1.0.0',
                        }],
                    },
                },
            ],
        })
        .setPackagePath(Path.join(appDataPath, 'package'))
        .setTemporaryPath(Path.join(appDataPath, 'temp'));

    return env;
};
