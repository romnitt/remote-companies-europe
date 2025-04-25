// Scrape text from each domain using axios and cheerio
import axios from 'axios';
import cheerio from 'cheerio';
import domains from './domains.js';

async function scrapeDomains(domains) {
  for (const url of domains) {
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ScraperBot/1.0)'
        }
      });
      const html = response.data;
      const $ = cheerio.load(html);
      // Get all visible text from the body
      const text = $('body').text();
      console.log(`Text from ${url}:\n`, text.slice(0, 500), '\
---'); // Print first 500 chars for brevity
    } catch (err) {
      console.error(`Failed to fetch ${url}:`, err.message);
    }
  }
}

scrapeDomains(domains);
