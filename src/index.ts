/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Core, Environment } from "@barksh/core";
import { Coco, createInfoCommand } from "@sudoo/coco";
import { CORE_EVENT } from "@sudoo/coco/event/declare";
import { createPrintCommands, getEnvironment } from "./environment";
import { createInitCommand } from "./init";
import { createInstallCommand } from "./install";
import { createSourceCommand } from "./source";
import { createUpdateCommand } from "./update";

export const BarkCli = async (args: string[]): Promise<void> => {

    try {

        const env: Environment = await getEnvironment();
        const core: Core = Core.withEnvironment(env);

        const coco: Coco = Coco.create();

        coco.commands(createPrintCommands(core));

        coco.command(createInitCommand(core));
        coco.command(createInstallCommand(core));
        coco.command(createSourceCommand(core));
        coco.command(createUpdateCommand(core));
        coco.command(createInfoCommand('help', coco, console.log));
        coco.on(CORE_EVENT.SUCCEED, () => console.log('done'));

        await coco.go(args);
    } catch (error) {

        console.log(error);
    }
};

export default BarkCli;
