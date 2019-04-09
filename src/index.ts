/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Coco, Command } from "@sudoo/coco";
import { CORE_EVENT } from "@sudoo/coco/event/declare";
import { getEnvironment, replaceConfig } from "./environment";
import { createInitCommand } from "./init";
import { createUpdateCommand } from "./update";

export const BarkCli = async (args: string[]): Promise<void> => {

    try {

        const env: Environment = await getEnvironment();
        const core: Core = Core.withEnvironment(env);

        const coco: Coco = Coco.create();

        coco.command(createInitCommand(core));
        coco.command(Command.create('sources').then(() => console.log(env)));
        coco.command(
            Command.create('source').argument(Argument.create('source')).then(async (inputs: Record<string, string>) => {
                const newEnvironment: Environment = await core.addSource(inputs.source);
                await replaceConfig(newEnvironment);
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
