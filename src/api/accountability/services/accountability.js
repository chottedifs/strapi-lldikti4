'use strict';

/**
 * accountability service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accountability.accountability');
