import { get } from 'lodash';

// Since DELETE doesn't return the _id of deleted item by default
module.exports.formatResponse = function (req, res) {
  if (req.crudify.err) console.error('formatResponse:', get(req, 'crudify.err.message'));
  return res.json(req.crudify.err || (req.method === 'DELETE' ? req.params : req.crudify.result));
};
