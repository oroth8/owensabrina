/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.sabrina-owen-wedding.com',
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    // exclude: ['/protected-page', '/awesome/secret-page'],
    // Default transformation function
    transform: async (config, path) => {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/wedding-party'),
      await config.transform(config, '/travel'),
      await config.transform(config, '/RSVP'),
      await config.transform(config, '/registry'),
      await config.transform(config, '/events'),
      await config.transform(config, '/engagement-party/rsvp'),
      await config.transform(config, '/engagement-party/find'),
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/address', '/engagement-party/edit/*'],
        },
      ],
    },
  }