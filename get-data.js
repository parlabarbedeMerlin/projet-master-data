const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { printTable } = require('console-table-printer')

const START_TIMESTAMP = 946857600
const currentTimestampShort = Math.floor(Date.now() / 1000)
const constructUrl = `https://query1.finance.yahoo.com/v7/finance/download/AI.PA?period1=${START_TIMESTAMP}&period2=${currentTimestampShort}&interval=1d&events=history&includeAdjustedClose=true`

const downloadData = async () => {
    const { data } = await axios.get(constructUrl)
    fs.writeFileSync(path.join(__dirname, 'data.csv'), data)
    console.log('Data downloaded')
}

const extractData = () => {
    const data = fs.readFileSync(path.join(__dirname, 'data.csv'), 'utf8');
    const lines = data.split('\n')
    const headers = lines[0].split(',')
    const result = []

    for (let i = 1; i < lines.length; i++) {
        const obj = {}
        const currentLine = lines[i].split(',')
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj)
    }

    printTable(result)
}


downloadData()
extractData()