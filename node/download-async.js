var rp = require('request-promise-native')

function downloadUrl() {
    return (url) => {
        return rp({
            url: url,
            proxy: process.env.http_proxy,
            encoding: null
        })
        .then(response => (Buffer.from(response))
        );
    }
}

module.exports = downloadUrl;