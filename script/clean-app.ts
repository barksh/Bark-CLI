/**
 * @author WMXPY
 * @namespace Script
 * @description Clean App
 */

import * as Fs from 'fs';
import * as Path from 'path';
import { rmRFFolderSync } from './util';

const appPath: string = Path.join(__dirname, '..', 'app');

if (!Fs.existsSync(appPath)) {
    Fs.mkdirSync(appPath);
}

const files: string[] = Fs.readdirSync(appPath);
for (const file of files) {

    rmRFFolderSync(Path.join(appPath, file));
}

