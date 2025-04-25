import axios from 'axios'
import * as cheerio from 'cheerio'
import domains from './domains.js'

// console.log(domains)

const firstTenDomains = domains.slice(0, 10)

console.log(firstTenDomains)

const scrape = async () => {
	for (const url of firstTenDomains) {
		try {
			const response = await axios.get(url, {
				headers: {
					'User-Agent': 'Mozilla/5.0 (compatible; ScraperBot/1.0)',
				},
			})
			const html = response.data
			const $ = cheerio.load(html)
			// Get page title
			const title = $('title').text().trim()
			// Get all visible text from the body
			const text = $('body').text().replace(/\s+/g, ' ').trim()
			console.log(`Title: ${title}`)
			console.log(`Text from ${url}:\n`, text.slice(0, 500), '\n---') // Print first 500 chars for brevity
		} catch (err) {
			console.error(`Failed to fetch ${url}:`, err.message)
		}
	}
}

scrape()
