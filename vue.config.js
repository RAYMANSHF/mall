const path = require('path');
module.exports = {

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', path.join(__dirname, 'src'))
            .set('components', path.join(__dirname, 'src/components'))
            .set('common', path.join(__dirname, 'src/comonents/common'))
            .set('network', path.join(__dirname, 'src/network'))
            .set('views', path.join(__dirname, 'src/views'))
            .set('assets', path.join(__dirname, 'src/assets'))
            .set('tabbar', path.join(__dirname, 'src/assets/img/tabbar'))
            .set('router', path.join(__dirname, 'src/router'))
    },

}