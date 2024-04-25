
module.exports = async (req, res, next) => { 
    console.log(`SessionId ${req.session.UserID}`)
    if (req.session.UserID) {
        return res.redirect('/');
    }
    next();
};


