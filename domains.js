import csvData from './csv-data.js'

const csvDataArray = csvData
	.trim()
	.split('\n')
	.map((line) => line.split(',').map((item) => item.trim()))

const urls = []

csvDataArray.forEach((item) => {
	urls.push(item[1])
})

const domains = []

urls.forEach((url) => {
	const domain = `https://${url.split('/')[2]}`
	domains.push(domain)
})

// Here are the domains to scrape

// console.log(domains)

export default domains
