/**
 * @author WMXPY
 * @namespace Command
 * @description Init
 */

import { Core, Environment, Template } from "@barksh/core";
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

            const template: Template | null = await core.attemptFindTemplate(inputs.template);

            if (!template) {
                throw new Error('template not found');
            }

            const newEnv: Environment = await core.initTemplate(template, {
                test: 'test',
            }, inputs.target);
            console.log(newEnv);
        });
};
