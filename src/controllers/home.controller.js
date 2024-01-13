const getHomePage = (req, res) => {
    res.send('Hello World!')
};

const getSample = (req, res) => {
    res.render('sample')
};

module.exports = {
    getHomePage,
    getSample
}