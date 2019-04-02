/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Core, Environment } from "@barksh/core";
import { Coco } from "@sudoo/coco";
import { createInitCommand } from "./command/init";
import { createUpdateCommand } from "./command/update";
import { getEnvironment } from "./environment";

export const BarkCli = async (args: string[]): Promise<void> => {

    try {
        const env: Environment = await getEnvironment();
        console.log(env);
        const core: Core = Core.withEnvironment(env);

        const coco: Coco = Coco.create();

        coco.command(createInitCommand(core));
        coco.command(createUpdateCommand(core));

        await coco.go(args);

        console.log('done');
    } catch (error) {
        console.log(error);
    }
};

export default BarkCli;
