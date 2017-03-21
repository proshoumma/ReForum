/**
 * Search object properties recursively and
 * perform callback action on each
 * @param  {Object}   obj      [object to search props]
 * @param  {Function} callback [action to perform on each props, two parameters (property, object)]
 * @return {Object}            [new modified object]
 */
const deepPropSearch = (obj, callback) => {
  // new object for immutability
  const newObj = Object.assign({}, obj);

  // recursive search function
  const deepSearch = (obj) => {
    for (const prop in obj) {
      // perform callback for each property
      callback && callback(prop, obj);

      // recursive search inside objects/arrays
      if (typeof obj[prop] === 'object') {
        if (obj[prop].length && obj[prop].length > 0) {
          obj[prop].forEach((deepObj) => {
            deepSearch(deepObj);
          });
        } else {
          deepSearch(obj[prop]);
        }
      }
    }
  };

  // start deep searching for properties
  deepSearch(newObj, callback);

  // return new object, maintain immutability
  return newObj;
};

const generateDiscussionSlug = (discussionTitle) => {
  const ObjectId = require('mongoose').Types.ObjectId();
  return discussionTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '_' + ObjectId;
};

module.exports = {
  deepPropSearch,
  generateDiscussionSlug,
};
