"use strict";
var _a;
exports.__esModule = true;
exports.POLLING_DB_URLS = exports.POLL_VOTE_TYPE = exports.PollInputFormat = exports.SupportedNetworks = void 0;
var SupportedNetworks;
(function (SupportedNetworks) {
    SupportedNetworks["mainnet"] = "mainnet";
    SupportedNetworks["goerli"] = "goerli";
    SupportedNetworks["dijets"] = "dijets";
})(SupportedNetworks = exports.SupportedNetworks || (exports.SupportedNetworks = {}));
var PollInputFormat;
(function (PollInputFormat) {
    PollInputFormat["singleChoice"] = "single-choice";
    PollInputFormat["rankFree"] = "rank-free";
    PollInputFormat["chooseFree"] = "choose-free";
})(PollInputFormat = exports.PollInputFormat || (exports.PollInputFormat = {}));
exports.POLL_VOTE_TYPE = {
    PLURALITY_VOTE: 'Plurality Voting',
    RANKED_VOTE: 'Ranked Choice IRV',
    UNKNOWN: 'Unknown'
};
exports.POLLING_DB_URLS = (_a = {},
    _a[SupportedNetworks.mainnet] = 'https://pollingdb2-mainnet-prod.makerdux.com/api/v1',
    _a[SupportedNetworks.goerli] = 'https://pollingdb2-goerli-staging.makerdux.com/api/v1',
    _a[SupportedNetworks.dijets] = 'http://20.68.211.18:3001/v1',
    _a);
