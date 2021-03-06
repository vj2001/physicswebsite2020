const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
    	req.flash("error","You Must be logged in first!");  
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile');
});

module.exports = router;