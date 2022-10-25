const fs = require('fs');

class CoffeeController {
    async getFilters(req, res) {
        const result = JSON.parse(fs.readFileSync('coffee.json', 'utf-8')).filters
        res.json(result)
    }
    async getCoffee(req, res) {
        const result = JSON.parse(fs.readFileSync('coffee.json', 'utf-8')).coffee
        res.json(result)
    }
    async getBestCofeee(req, res) {
        const result = JSON.parse(fs.readFileSync('coffee.json', 'utf-8')).bestCoffee
        res.json(result)
    }
}

module.exports = new CoffeeController();