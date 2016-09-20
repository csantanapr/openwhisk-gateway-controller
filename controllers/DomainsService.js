'use strict';

exports.createDomain = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * slug (String)
  * payload (Domain)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteDomain = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * slug (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getDomain = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * slug (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "domain" : "aeiou",
  "namespace" : "aeiou",
  "slug" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getDomainCerts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * slug (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getDomains = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateDomain = function(args, res, next) {
  /**
   * parameters expected in the args:
  * namespace (String)
  * slug (String)
  * payload (Domain)
  **/
    var examples = {};
  examples['application/json'] = {
  "domain" : "aeiou",
  "namespace" : "aeiou",
  "slug" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

