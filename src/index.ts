/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Environment } from "@barksh/core";
import { Coco } from "@sudoo/coco";
import { createInitCommand } from "./command/init";
import { getEnvironment } from "./environment";

export const BarkCli = async (args: string[]): Promise<void> => {

    const env: Environment = getEnvironment();
    const coco: Coco = Coco.create();

    coco.command(createInitCommand(env));

    await coco.go(args);

    console.log('done');
};

export default BarkCli;
