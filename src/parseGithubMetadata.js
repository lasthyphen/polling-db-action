"use strict";
exports.__esModule = true;
exports.parseGithubMetadata = void 0;
var gray_matter_1 = require("gray-matter");
var constants_1 = require("./constants");
var fetchPollTags_1 = require("./fetchPollTags");
function parseGithubMetadata(pollsWithRawMetadata, pollTagsFilePath) {
    var polls = pollsWithRawMetadata
        .map(function (_a) {
        var pollId = _a.pollId, rawMetadata = _a.rawMetadata;
        var pollMetadata = (0, gray_matter_1["default"])(rawMetadata).data;
        var title = pollMetadata.title || '';
        var voteType = (pollMetadata === null || pollMetadata === void 0 ? void 0 : pollMetadata.vote_type) ||
            constants_1.POLL_VOTE_TYPE.UNKNOWN;
        var pollType = pollMetadata.parameters
            ? validatePollType(pollMetadata.parameters)
            : oldVoteTypeToNew(voteType);
        return {
            pollId: pollId,
            title: title,
            type: pollType
        };
    })
        .filter(function (poll) { return poll.type; });
    var pollsWithTags = (0, fetchPollTags_1.assignTags)(polls, pollTagsFilePath);
    return pollsWithTags;
}
exports.parseGithubMetadata = parseGithubMetadata;
var validatePollType = function (params) {
    var inputFormatType = '';
    if (typeof params.input_format === 'string') {
        inputFormatType = params.input_format;
    }
    else {
        inputFormatType = params.input_format.type;
    }
    if (inputFormatType === constants_1.PollInputFormat.rankFree ||
        inputFormatType === constants_1.PollInputFormat.singleChoice ||
        inputFormatType === constants_1.PollInputFormat.chooseFree) {
        return inputFormatType;
    }
    else {
        return null;
    }
};
var oldVoteTypeToNew = function (voteType) {
    if (voteType === constants_1.POLL_VOTE_TYPE.PLURALITY_VOTE ||
        voteType === constants_1.POLL_VOTE_TYPE.UNKNOWN) {
        return constants_1.PollInputFormat.singleChoice;
    }
    else {
        return constants_1.PollInputFormat.rankFree;
    }
};
