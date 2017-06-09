var has = require('lodash/has'),
    hasIn = require('lodash/hasIn'),
    pick = require('lodash/pick'),
    omit = require('lodash/omit'),
    some = require('lodash/some'),
    isObject = require('lodash/isObject'),
    isArray = require('lodash/isArray'),
    isEmpty = require('lodash/isEmpty'),
    moment = require('moment'),
    HttpError = require('./general').HttpError,
    FeedItem = require('../models/FeedItem');

module.exports = {

  /**
   * Check that exactly one of a set of properties is set on an object
   *
   * @param {object} object
   * @param {string[]} properties
   *
   * @returns {boolean|Error}
   */
  oneOf(object, properties) {
    if (!isObject(object)) { return new Error('Object should be type Object'); }
    if (!isArray(properties)) { return new Error('Properties should be an Array of Strings'); }

    return some(properties, property => {
      return (
        has(object, property) &&
        isEmpty(omit(object, property))
      );
    });
  },

  /**
   * Check that an array has at least one element
   *
   * @param {array} property
   *
   * @returns {boolean|Error}
   */
  hasOne(property) {
    if (!isArray(property)) { return new Error('Property should be an Array'); }

    return property.length > 0;
  },

  /**
   * Mongoose plugin to throw an error when findOne and findById queries return no result
   *
   * @param {Schema} schema
   */
  findOneOrThrow(schema) {
    schema.post('findOne', (res, next) => {
      if (!res) {
        return next(new HttpError('Not Found', 404));
      }

      next();
    });
  },

  /**
   * Mongoose plugin to also save a linked FeedItem when saving a document
   *
   * @param {Schema} schema
   * @param {object} opts
   * @param {string} opts.type
   */
  addFeedItem(schema, opts) {
    // Save a FeedItem after saving the document
    schema.post('save', function (doc) {
      if (hasIn(doc, 'deed') || hasIn(doc, 'target.deed') || hasIn(doc, 'target.group')) {
        var feedItem = pick(doc.toObject(), ['user', 'group', 'campaign']);
        feedItem.target = doc.deed ? { deed: doc.deed } : doc.target;
        feedItem[opts.type.toLowerCase()] = doc._id;

        if (feedItem.act) {
          // Find and update recent FeedItem for deeds done
          FeedItem.findOne({
            user: feedItem.user,
            'target.deed': feedItem.target.deed,
            modified: { $gt: moment().subtract(5, 'minutes').toDate() }
          })
            .then(foundFeedItem => {
              if (foundFeedItem) {
                // Found recent FeedItem, update it
                foundFeedItem.count++;
                foundFeedItem.modified = new Date();
                return foundFeedItem.save();
              } else {
                // No recent FeedItem, create it
                return FeedItem.findOrCreate(feedItem);
              }
            });
        } else {
          // Always find or create for testimonies
          FeedItem.findOrCreate(feedItem);
        }
      }
    });

    // Find and remove the FeedItem when removing the document
    schema.post('remove', function (doc) {
      FeedItem.findOne({ $or: [{ act: doc._id }, { comment: doc._id }] }).exec()
        .then(feedItem => feedItem.remove());
    });
  }

};
