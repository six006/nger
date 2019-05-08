"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path_1 = require("path");
const root = process.cwd();
const lodash_1 = require("lodash");
function createAdmin(name) {
    const code = `import { NgModule } from 'nger-core';
import pages, { ${lodash_1.upperFirst(lodash_1.camelCase(name))}AdminWelcomePage } from './template/admin';
import incs from './inc';
@NgModule({
    declarations: [
        ...pages,
    ],
    providers: [
        ...incs
    ],
    bootstrap: [
        ${lodash_1.upperFirst(lodash_1.camelCase(name))}AdminWelcomePage
    ],
    imports: []
})
export default class ${lodash_1.upperFirst(lodash_1.camelCase(name))}AdminModule { }
`;
    const path = path_1.join(root, 'addon', name, 'admin.ts');
    fs_extra_1.default.ensureDirSync(path_1.dirname(path));
    fs_extra_1.default.writeFileSync(path, code);
}
exports.createAdmin = createAdmin;