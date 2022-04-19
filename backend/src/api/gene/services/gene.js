'use strict';

/**
 * gene service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gene.gene');
