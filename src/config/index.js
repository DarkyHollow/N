require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    prefix: process.env.PREFIX,
    database: process.env.DATABASE,
    debug: (process.env.DEBUG === 'true') ? true : false,
    port: Number(process.env.PORT),
    nodes: require('./nodes.js'),
    emojis: require('./emojis.js'),
    topgg: {
        token: process.env.TOPGG_TOKEN,
        auth: process.env.TOPGG_AUTH
    },
    logs: {
        ready: '1322098453769093191',
        nodes: '1322098532848635996',
        join: '1322098568731033702',
        leave: '1322098680051929128',
        vote: '1322098745558433903',
    }
};
