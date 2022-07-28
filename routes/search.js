const express = require('express');
const router = express.Router();
const tvshows = require('../data/tvshows');

router.post('/', async(req, res) => {
    let searchTerm = req.body.searchTerm;

    if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.trim().length === 0) {
        res.status(400).render('shows/error', {
            title: "No Shows Found",
            hasErrors: true,
            error: 'TV Show search term can not be blank / empty or just spaces. Please try entering valid string search term!'
        });
        return;
    }

    try {
        let showList = await tvshows.searchTVShows(searchTerm);

        if (showList.length == 0) {
            res.status(404).render('shows/error', {
                title: "No Shows Found",
                hasSearchError: true,
                searchTerm: searchTerm
            });
        } else {
            res.render('shows/index', {
                title: "Shows Found",
                shows: showList,
                searchTerm: searchTerm
            });
        }
    } catch (e) {
        res.status(500).render('shows/error', {
            title: "No Shows Found",
            hasErrors: true,
            error: e
        });
    }
});

module.exports = router;