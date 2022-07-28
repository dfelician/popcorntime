const axios = require("axios");
const validation = require('./validation');

async function searchTVShowsAPI(searchTerm) {
    const {
        data
    } = await axios.get('http://api.tvmaze.com/search/shows?q=' + searchTerm);
    return data;
}

async function getTVShowAPI(showID) {
    const {
        data
    } = await axios.get('http://api.tvmaze.com/shows/' + showID);
    return data;
}

async function searchTVShows(searchTerm) {

    validation.validateString("searchTerm", searchTerm);

    const data = await searchTVShowsAPI(searchTerm);

    let tvShowsResult = [];
    let tvShowCounter = 0;
    for (let temp of data) {
        show = {
            'id': temp.show.id,
            'name': temp.show.name
        }
        tvShowsResult.push(show);
        tvShowCounter++;

        if (tvShowCounter === 10) {
            break;
        }
    }

    return tvShowsResult;
}

async function getTVShow(showID) {

    validation.validateNumber("showID", showID);

    const data = await getTVShowAPI(showID);

    if (data.id == null) {
        throw "TV Show not found for ID = `" + showID + "`";
    }

    return data;
}

module.exports = {
    searchTVShows,
    getTVShow
};