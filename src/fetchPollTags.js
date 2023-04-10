"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.assignTags = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
function assignTags(pollMetadata, pollTagsFilePath) {
    var tagsPath = path_1["default"].join(process.cwd(), pollTagsFilePath);
    if (!(0, fs_1.existsSync)(tagsPath)) {
        throw new Error('Tags file does not exist');
    }
    var tagsFileContent = (0, fs_1.readFileSync)(tagsPath, 'utf8');
    var tags = JSON.parse(tagsFileContent);
    var polls = pollMetadata.map(function (poll) { return (__assign(__assign({}, poll), { tags: tags[poll.pollId] || [] })); });
    return polls;
}
exports.assignTags = assignTags;
