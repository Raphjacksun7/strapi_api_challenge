"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findFirst: async () => {
    return strapi
      .query("organizations")
      .find({ _limit: 1, _sort: "created_at:asc" });
  },
};
