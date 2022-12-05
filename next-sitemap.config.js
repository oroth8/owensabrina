/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.sabrina-owen-wedding.com",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 100,
  generateRobotsTxt: true,
  exclude: ['/engagement-party/find', '/engagement-party/rsvp'],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, ""),
    await config.transform(config, "/wedding-party"),
    await config.transform(config, "/travel"),
    await config.transform(config, "/travel/hotels"),
    await config.transform(config, "/travel/guide"),
    await config.transform(config, "/travel/transporation"),
    await config.transform(config, "/RSVP"),
    await config.transform(config, "/registry"),
    await config.transform(config, "/events"),
    await config.transform(config, "/photos"),
    await config.transform(config, "/invite-address"),
    await config.transform(config, "/invite-address/new"),
    await config.transform(config, "/invite-address/update"),

  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/engagement-party/*", "/invite-address/thank-you"],
      },
    ],
  },
};
