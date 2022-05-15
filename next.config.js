const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/*const ContentSecurityPolicy = `
  default-src 'self' *.asa-leon.works;
  script-src 'self' *.asa-leon.works;
  child-src 'self' *.asa-leon.works;
  style-src 'self' *.asa-leon.works;
  font-src 'self' *.asa-leon.works;
`*/
// security headers
const securityHeaders = [
/*	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
	},
*/
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocatioin=()'
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin'
	}
]

module.exports = {
  // use security headers
  async headers() {
	return [
		{
			source: '/:path*',
			headers: securityHeaders,
		}
	]
  }
}