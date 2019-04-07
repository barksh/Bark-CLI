/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Coco, Command } from "@sudoo/coco";
import { CORE_EVENT } from "@sudoo/coco/event/declare";
import { createInitCommand } from "./command/init";
import { createUpdateCommand } from "./command/update";
import { getEnvironment } from "./environment";

export const BarkCli = async (args: string[]): Promise<void> => {

    try {

        const env: Environment = await getEnvironment();
        const core: Core = Core.withEnvironment(env);

        const coco: Coco = Coco.create();

        coco.command(createInitCommand(core));
        coco.command(
            Command.create('source').argument(Argument.create('source')).then(async (inputs: Record<string, string>) => {
                await core.addSource(inputs.source);
            }),
        );
        coco.command(createUpdateCommand(core));
        coco.on(CORE_EVENT.FINISH, () => console.log('done'));

        await coco.go(args);
    } catch (error) {
        console.log(error);
    }
};

export default BarkCli;
