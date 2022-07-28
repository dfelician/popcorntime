const searchRoutes = require('./search');
const showsRoutes = require('./shows');
const path = require('path');

const constructorMethod = (app) => {
    app.get('/', (req, res) => {
        res.render('shows/new', {
            title: "Show Finder"
        });
    });

    app.use('/search', searchRoutes);
    app.use('/shows', showsRoutes);

    app.use('*', (req, res) => {
        res.sendFile(path.resolve('static/404.html'));
    });
};

module.exports = constructorMethod;