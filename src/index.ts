/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Environment } from "@barksh/core";
import { Coco } from "@sudoo/coco";
import { getEnvironment } from "./environment";

export const BarkCli = (args: string[]) => {

    const env: Environment = getEnvironment();
    const coco: Coco = Coco.create();
};

export default BarkCli;
