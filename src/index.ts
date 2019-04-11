/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Core, Environment } from "@barksh/core";
import { Argument, Coco, Command, createInfoCommand } from "@sudoo/coco";
import { CORE_EVENT } from "@sudoo/coco/event/declare";
import { getEnvironment, replaceConfig } from "./environment";
import { createInitCommand } from "./init";
import { createInstallCommand } from "./install";
import { createUpdateCommand } from "./update";

export const BarkCli = async (args: string[]): Promise<void> => {

    try {

        const env: Environment = await getEnvironment();
        const core: Core = Core.withEnvironment(env);

        const coco: Coco = Coco.create();

        coco.command(createInitCommand(core));
        coco.command(createInstallCommand(core));
        coco.command(Command.create('s').then(() => console.log(...core.getSources())));
        coco.command(Command.create('t').then(() => console.log(...core.getTemplates())));
        coco.command(
            Command
                .create('source')
                .argument(Argument.create('source'))
                .then(async (inputs: Record<string, string>) => {
                    const newEnvironment: Environment = await core.addSource(inputs.source);
                    await replaceConfig(newEnvironment);
                }),
        );
        coco.command(createUpdateCommand(core));
        coco.command(createInfoCommand('help', coco, console.log));
        coco.on(CORE_EVENT.SUCCEED, () => console.log('done'));

        await coco.go(args);
    } catch (error) {
        console.log(error);
    }
};

export default BarkCli;
