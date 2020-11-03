const express= require('express');
const router = express.Router();

//router hakkab päringuid haldama, ükskõik mis päringut
router.get('*', (req, res) => {
    res.status(404).render('404.ejs');
});

module.exports = router;