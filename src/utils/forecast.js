const request = require('request')

const forecast = (location, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=4777c79c95df5c0c10ac682f78b0dc6f&query='+ location

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast