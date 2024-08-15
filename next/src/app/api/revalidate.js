import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(req, res) {
	// Step 2: Verify the webhook secret
	const signature = req.headers[SIGNATURE_HEADER_NAME]
	const body = await readBody(req) // rawBody is needed for verification

	if (!isValidSignature(body, signature, secret)) {
		res.status(401).json({ success: false, message: 'Invalid signature' })
	}

	// Step 3: Handle the webhook payload
	const { type, slug } = JSON.parse(body)

	// Step 4: Revalidate the specific path
	try {
		if (type === 'post') {
			await res.revalidate(`/posts/${slug}`)
			return res.json({ message: `Revalidated "${slug}"` })
		}

		// Add more content types as needed

		return res.json({ message: 'No path to revalidate' })
	} catch (err) {
		return res.status(500).send('Error revalidating')
	}
}

// Helper function to read the request body
async function readBody(readable) {
	const chunks = []
	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
	}
	return Buffer.concat(chunks).toString('utf8')
}

// Step 5: Configure your environment variables in Vercel
// SANITY_WEBHOOK_SECRET=your_webhook_secret_here

// Step 6: Set up the webhook in Sanity
// Go to your Sanity project settings
// Navigate to API > Webhooks
// Create a new webhook with the URL: https://your-vercel-domain.com/api/revalidate
// Set the HTTP method to POST
// Add your secret to the webhook configuration
