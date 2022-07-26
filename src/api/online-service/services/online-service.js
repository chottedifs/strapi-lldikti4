'use strict';

/**
 * online-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::online-service.online-service');
