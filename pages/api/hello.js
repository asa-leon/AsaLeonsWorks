// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import requestIp from 'request-ip'
import rateLimit from '../../libs/rate-limit'

const limiter = rateLimit({
	interval: 60 * 1000,
	uniqueTokenPerInterval: 500,
})

export default async function handler(req, res) {

	const clientIp = requestIp.getClientIp(req) || 'IP_NOT_FOUND'

	try {

		await limiter.check(res, 10, clientIp)
		
		
	} catch (error) {
		
		console.error(error)

		res.status(429).json({ 
			text: `Rate Limited`,
			clientIp: clientIp
		})
		return
	}

	res.status(200).json({ 
		text: `テキスト`,
		clientIp: clientIp
	})
}
