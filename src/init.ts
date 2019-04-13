/**
 * @author WMXPY
 * @namespace Command
 * @description Init
 */

import { Core } from "@barksh/core";
import { Argument, Command } from "@sudoo/coco";

export const createInitCommand = (core: Core): Command => {

    return Command.create('init')
        .argument(Argument.create('template'))
        .argument(Argument.create('target'))
        .then(async (inputs: {
            readonly template: string;
            readonly target: string;
        }) => {

            console.log(inputs.template, inputs.target);

            console.log(await core.attemptFindTemplate(inputs.template));
        });
};
