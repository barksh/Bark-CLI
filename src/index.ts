/**
 * @author WMXPY
 * @namespace Cli
 * @description Index
 */

import { Environment } from "@barksh/core";
import { Argument, Coco, Command, Option } from "@sudoo/coco";
import { getEnvironment } from "./environment";

export const BarkCli = (args: string[]) => {

    const env: Environment = getEnvironment();
    const coco: Coco = Coco.create();

    coco.command(Command.create('test')
        .argument(Argument.create('hello'))
        .option(Option.create('a').setName('name'))
        .then((inputs) => console.log(inputs)));

    coco.go(args);
};

export default BarkCli;
