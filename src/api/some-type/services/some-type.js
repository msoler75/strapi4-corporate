'use strict';

/**
 * some-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::some-type.some-type');
