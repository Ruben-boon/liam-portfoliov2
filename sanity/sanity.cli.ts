import { defineCliConfig } from 'sanity/cli'
import { projectId } from './src/env'

export default defineCliConfig({
	api: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: 'production',
	},
})
