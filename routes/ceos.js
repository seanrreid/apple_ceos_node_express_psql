const express = require("express"),
    router = express.Router(),
    Ceo = require("../models/ceoModel");

router.get("/", async function(req, res, next) {
    const executiveData = await Ceo.getAll();

    res.render("template", {
        locals: {
            title: "Apple CEOs page",
            data: executiveData
        },
        partials: {
            partial: "partial-ceos"
        }
    });
});

router.post('/add', (req, res) =>{
    const name = req.body.ceo_name,
        year = req.body.ceo_year;

    const ceo = new Ceo(name, year);

    ceo.save().then(() => {
      res.redirect('/ceos');
    });
  });

module.exports = router;
