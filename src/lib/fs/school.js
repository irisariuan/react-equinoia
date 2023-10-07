"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCsv = exports.readCsv = exports.formatSchools = exports.formatSchoolString = exports.removeSchool = exports.addScool = exports.readSchools = void 0;
var fs_1 = require("fs");
var kv_1 = require("@vercel/kv");
function readSchools() {
    return __awaiter(this, void 0, void 0, function () {
        var cabinet, chin, eng, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, kv_1.kv.lrange('cabinetName', 0, -1)];
                case 1:
                    cabinet = _a.sent();
                    return [4 /*yield*/, kv_1.kv.lrange('chineseName', 0, -1)];
                case 2:
                    chin = _a.sent();
                    return [4 /*yield*/, kv_1.kv.lrange('englishName', 0, -1)];
                case 3:
                    eng = _a.sent();
                    res = cabinet.reduce(function (p, n, i) { return p.concat({ cabinetName: n, schoolName: { chineseName: chin[i], englishName: eng[i] } }); }, []);
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.readSchools = readSchools;
function addScool(school) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, kv_1.kv.lpos('chineseName', school.schoolName.chineseName)];
                case 1:
                    index = _a.sent();
                    if (index !== null) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, kv_1.kv.lpush('cabinetName', school.cabinetName)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, kv_1.kv.lpush('englishName', school.schoolName.englishName)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, kv_1.kv.lpush('chineseName', school.schoolName.chineseName)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.addScool = addScool;
function removeSchool(school) {
    return __awaiter(this, void 0, void 0, function () {
        var index, _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, kv_1.kv.lpos('chineseName', school.schoolName.chineseName)];
                case 1:
                    index = _k.sent();
                    if (index === null) {
                        return [2 /*return*/, false];
                    }
                    _b = (_a = kv_1.kv).lrem;
                    _c = ['cabinetName', 1];
                    return [4 /*yield*/, kv_1.kv.lindex('cabinetName', index)];
                case 2: return [4 /*yield*/, _b.apply(_a, _c.concat([_k.sent()]))];
                case 3:
                    _k.sent();
                    _e = (_d = kv_1.kv).lrem;
                    _f = ['englishName', 1];
                    return [4 /*yield*/, kv_1.kv.lindex('englishName', index)];
                case 4: return [4 /*yield*/, _e.apply(_d, _f.concat([_k.sent()]))];
                case 5:
                    _k.sent();
                    _h = (_g = kv_1.kv).lrem;
                    _j = ['chineseName', 1];
                    return [4 /*yield*/, kv_1.kv.lindex('chineseName', index)];
                case 6: return [4 /*yield*/, _h.apply(_g, _j.concat([_k.sent()]))];
                case 7:
                    _k.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.removeSchool = removeSchool;
function formatSchoolString(s) {
    return s.replaceAll(/(?<!\\)(,)/g, String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject([","], ["\\,"]))));
}
exports.formatSchoolString = formatSchoolString;
function formatSchools(school) {
    return school.reduce(function (old, sch) {
        return old + '\n' + [sch.schoolName.englishName, sch.schoolName.chineseName, sch.cabinetName].map(formatSchoolString).join(',');
    }, '').slice(1);
}
exports.formatSchools = formatSchools;
function readCsv(filename, splitPoint) {
    var _a;
    if (splitPoint === void 0) { splitPoint = 3; }
    return (_a = (0, fs_1.readFileSync)(filename, { encoding: 'utf-8' }).replaceAll('\n', ',').replaceAll('\r', '').match(/([^\\\][^,]|\\,)+/g)) === null || _a === void 0 ? void 0 : _a.reduce(function (old, n) {
        var o = old;
        o[o.length - 1].push(n.trim());
        if (o[o.length - 1].length >= splitPoint) {
            o.push([]);
        }
        return o;
    }, [[]]).map(function (_a) {
        var englishName = _a[0], chineseName = _a[1], cabinetName = _a[2];
        return { schoolName: { englishName: englishName, chineseName: chineseName }, cabinetName: cabinetName };
    }).slice(0, -1);
}
exports.readCsv = readCsv;
function writeCsv(filename, content) {
    return (0, fs_1.writeFileSync)(filename, formatSchools(content));
}
exports.writeCsv = writeCsv;
var templateObject_1;
