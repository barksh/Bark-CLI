/**
 * @author WMXPY
 * @namespace Command
 * @description Init
 */

import { Core, Environment, Template } from "@barksh/core";
import { keys } from "@sudoo/bark/map";
import { Argument, Command, Reverse } from "@sudoo/coco";

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

            const reverse: Reverse = Reverse.create();
            const replaces: Record<string, string> | undefined = template.config.replacements;

            if (replaces) {
                for (const replace of keys(replaces)) {
                    replaces[replace] = await reverse.question(replace);
                }
            }

            const newEnv: Environment = await core.initTemplate(template, replaces || {}, inputs.target);
            console.log(newEnv);
        });
};
