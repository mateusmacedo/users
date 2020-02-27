import config from '../config';

const baseUri = `/${config.api.prefix}/${config.api.version}`;
module.exports = (app) => {
    app.route(baseUri)
        .get(async (req, res) => {
            const data = {service: 'users-ms'};
            res.json(data);
        });
};