'use strict';

var url = require('url');


var Routes = require('./RoutesService');


module.exports.createRoute = function createRoute (req, res, next) {
  Routes.createRoute(req.swagger.params, res, next);
};

module.exports.deleteRoute = function deleteRoute (req, res, next) {
  Routes.deleteRoute(req.swagger.params, res, next);
};

module.exports.getRoute = function getRoute (req, res, next) {
  Routes.getRoute(req.swagger.params, res, next);
};

module.exports.getRoutes = function getRoutes (req, res, next) {
  Routes.getRoutes(req.swagger.params, res, next);
};

module.exports.updateRoute = function updateRoute (req, res, next) {
  Routes.updateRoute(req.swagger.params, res, next);
};
