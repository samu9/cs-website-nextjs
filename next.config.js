const withSASS = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withSASS(withImages({
    // cssModules: true
}))