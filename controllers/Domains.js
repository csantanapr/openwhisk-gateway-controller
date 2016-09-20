'use strict';

var url = require('url');


var Domains = require('./DomainsService');


module.exports.createDomain = function createDomain (req, res, next) {
  Domains.createDomain(req.swagger.params, res, next);
};

module.exports.deleteDomain = function deleteDomain (req, res, next) {
  Domains.deleteDomain(req.swagger.params, res, next);
};

module.exports.getDomain = function getDomain (req, res, next) {
  Domains.getDomain(req.swagger.params, res, next);
};

module.exports.getDomainCerts = function getDomainCerts (req, res, next) {
  Domains.getDomainCerts(req.swagger.params, res, next);
};

module.exports.getDomains = function getDomains (req, res, next) {
  Domains.getDomains(req.swagger.params, res, next);
};

module.exports.updateDomain = function updateDomain (req, res, next) {
  Domains.updateDomain(req.swagger.params, res, next);
};
