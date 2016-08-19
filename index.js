"use strict";
var lodash_1 = require("lodash");
exports.__rtmap = lodash_1.map;
exports.__rtassign = lodash_1.assign;
function __rtmergeprops(inline, external) {
    var res = lodash_1.assign({}, inline, external);
    if (inline.hasOwnProperty('style')) {
        res.style = lodash_1.defaults(res.style, inline.style);
    }
    if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
        res.className = external.className + ' ' + inline.className;
    }
    return res;
}
exports.__rtmergeprops = __rtmergeprops;
function __rtclass(ob) {
    return lodash_1.transform(ob, function (res, value, key) {
        if (value) {
            res.push(key);
        }
    }, []).join(" ");
}
exports.__rtclass = __rtclass;
//# sourceMappingURL=index.js.map