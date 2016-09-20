//jshint devel:true, node:true, esversion:6
'use strict';

var routes = {};

function getid(method, path) {
  return `${method}:${path}`.toLocaleLowerCase();
}
function getmethod(id) {
  return id.slice(0, id.indexOf(":"));
}
function getpath(id) {
  return id.slice(id.indexOf(":") + 1);
}

exports.createRoute = function (args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * payload (Route)
  **/
  // no response value expected for this operation

  let namespace = args.namespace.value;
  let method = args.payload.value.gatewayMethod;
  let path = args.payload.value.gatewayPath;
  let id = getid(method, path);
  var apidoc = args.payload.value;
  apidoc.id = id;
  apidoc.namespace = namespace;

  if (routes[namespace] === undefined) {
    //create namespace
    routes[namespace] = {};
  }
  routes[namespace][id] = apidoc;

  console.log(JSON.stringify(routes, null, 2));
  res.end();
};

exports.deleteRoute = function (args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * id (String)
  **/
  // no response value expected for this operation
  let namespace = args.namespace.value;
  let id = args.id.value;
  if (routes[namespace] !== undefined && routes[namespace][id] !== undefined) {
    delete routes[namespace][id];
  }
  res.end();
};

exports.getRoute = function (args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * id (String)
  **/

  let namespace = args.namespace.value;
  let id = args.id.value;

  if (routes[namespace] !== undefined && routes[namespace][id] !== undefined) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(routes[namespace][id], null, 2));
  }
  else {
    res.statusCode = 404;
    res.end();
  }

};

exports.getRoutes = function (args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  **/
  console.log('get all routes');
  let namespace = args.namespace.value;
  var result = [];
  if (routes[namespace] !== undefined) {
    for (let route in routes[namespace]) {
      result.push(routes[namespace][route]);
    }
    if (result.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result, null, 2));
    }
    else {
      res.statusCode = 404;
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end();
  }


};

exports.updateRoute = exports.createRoute;

