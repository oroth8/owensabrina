/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://sabrina-owen-wedding.com',
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
    // additionalPaths: async (config) => [
    //   await config.transform(config, '/additional-page'),
    // ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'test-bot',
          allow: ['/path', '/path-2'],
        },
        {
          userAgent: '*',
          disallow: ['/address', '/engagement-party/edit/*'],
        },
      ],
    },
  }