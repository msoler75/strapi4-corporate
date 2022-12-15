'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('icon-select')
      .service('myService')
      .getWelcomeMessage();
  },
});
