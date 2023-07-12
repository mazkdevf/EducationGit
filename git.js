const fetch = require('node-fetch');
const cheerio = require('cheerio');

class EducationGit {
    constructor(options = {}) {
        this.options = options;
        this.debug = this.options.debug || false;
    }

    getBenefits = () => new Promise(async (resolve, reject) => {
        try {
            const res = await fetch("https://education.github.com/pack");
            const text = await res.text();
            const $ = cheerio.load(text);

            var benefits = [];
            $('dl.rounded-2.p-4').each((i, el) => {
                var name = $(el).find('dt').text().trim() || "";
                var image = "https://education.github.com" + $(el).find('dt').find('img').attr('src').trim() || "";

                var description = $(el).find('dd').find('p.mb-3.f-4').text().trim() || "";
                var benefit = $(el).find('dd').find('p.f5.mb-4').text().trim() || "";

                var tags = [];
                $(el).find('dd').find('span.Label--small').each((i, el) => {
                    tags.push($(el).text().trim() || "");
                });

                this.debug ? console.log({
                    name,
                    image,
                    description,
                    benefit,
                    tags
                }) : null;

                benefits.push({
                    name,
                    image,
                    description,
                    benefit,
                    tags
                });
            });

            resolve({
                requestDate: {
                    timestamp: Date.now(),
                    dateFormat: "YYYY-MM-DD HH:mm:ss",
                    date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                },
                benefits: {
                    count: benefits.length,
                    list: benefits
                },
                applyForGitHubStudentDeveloperPack: "https://education.github.com/discount_requests/application",
                information: {
                    source: "https://education.github.com/pack",
                    libAuthor: "mazkdevf",
                    libName: "education-git-benefits",
                    libVersion: require('./package.json').version,
                }
            });
        } catch (error) {
            reject(error);
        }
    });

    filterBenefits = (benefits = [], filter) => new Promise(async (resolve, reject) => {
        try {
            var filteredBenefits = benefits.filter(benefit => {
                var tags = benefit.tags.map(tag => tag.toLowerCase());
                return tags.includes(filter.toLowerCase());
            });

            resolve({
                requestDate: {
                    timestamp: Date.now(),
                    dateFormat: "YYYY-MM-DD HH:mm:ss",
                    date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                },
                benefits: {
                    count: filteredBenefits.length,
                    list: filteredBenefits
                },
                applyForGitHubStudentDeveloperPack: "https://education.github.com/discount_requests/application",
                information: {
                    source: "https://education.github.com/pack",
                    libAuthor: "mazkdevf",
                    libName: "education-git-benefits",
                    libVersion: require('./package.json').version,
                },
                filter: filter
            });
        } catch (error) {
            reject(error);
        }           
    });

    getAllFilters = (benefits = []) => new Promise(async (resolve, reject) => {
        try {
            var filters = [];
            benefits.forEach(benefit => {
                benefit.tags.forEach(tag => {
                    if (!filters.includes(tag)) {
                        filters.push(tag);
                    }
                });
            });

            resolve({
                requestDate: {
                    timestamp: Date.now(),
                    dateFormat: "YYYY-MM-DD HH:mm:ss",
                    date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                },
                filters: {
                    count: filters.length,
                    list: filters
                },
                applyForGitHubStudentDeveloperPack: "https://education.github.com/discount_requests/application",
                information: {
                    source: "https://education.github.com/pack",
                    libAuthor: "mazkdevf",
                    libName: "education-git-benefits",
                    libVersion: require('./package.json').version,
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = EducationGit;