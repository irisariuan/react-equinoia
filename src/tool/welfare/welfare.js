"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var result = [];
var f = (0, fs_1.readFileSync)(process.cwd() + '/src/tool/welfare/doc.txt', { encoding: 'utf-8' });
for (var _i = 0, _a = f.replace(/\r/g, '').split('\n').filter(function (v) { return !!v; }).map(function (v) { return v.trim(); }); _i < _a.length; _i++) {
    var i = _a[_i];
    var ri = i.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '').trim();
    if (i.startsWith('🦊')) {
        var _b = ri.split('@').map(function (v) { return v.trim(); }), name_1 = _b[0], igName = _b[1];
        result.push({
            name: name_1,
            igName: igName,
            caution: [],
            description: [],
            location: [],
            isOnline: true,
        });
    }
    else if (i.startsWith('👉')) {
        result[result.length - 1].description.push(ri);
    }
    else if (i.startsWith('❗️')) {
        result[result.length - 1].caution.push(ri);
    }
    else if (i.startsWith('📍')) {
        result[result.length - 1].isOnline = false;
        result[result.length - 1].location.push(ri);
    }
    else if (i.startsWith('📎')) {
        result[result.length - 1].link = ri;
    }
}
var output = JSON.stringify({ store: result }, null, 4);
console.log(output);
(0, fs_1.writeFileSync)(process.cwd() + '/src/tool/welfare/out.txt', output);
