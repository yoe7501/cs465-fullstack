var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('/CS-465/travlr/data/trips.json', 'utf8'));

const travel = (req, res) => {
    res.render('travel', {title: 'Travel Getaways', trips});
};

module.exports = {
    travel
};