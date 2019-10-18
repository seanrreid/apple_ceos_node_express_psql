const express = require("express"),
    router = express.Router(),
    ExecutiveModel = require("../models/ceoModel");

router.get("/", async function(req, res, next) {
    const executiveData = await ExecutiveModel.getAll();

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

router.post("/add", async (req, res) => {
    const { ceo_name, ceo_year } = req.body;

    const executiveInstance = new ExecutiveModel(ceo_name, ceo_year);
    const executive = await executiveInstance.addNewCeo();
    console.log("row count", executive.rowCount);

    if (executive.rowCount !== 1) {
        res.sendStatus(500);
    } else {
        res.redirect("/ceos");
    }
})

module.exports = router;
