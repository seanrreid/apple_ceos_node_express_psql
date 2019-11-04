const express = require("express"),
    router = express.Router(),
    ceoModel = require("../models/ceoModel");

router.get("/", async function(req, res, next) {
    const executiveData = await ceoModel.getAll();
    res.status(200).json(executiveData);
    // res.render("template", {
    //     locals: {
    //         title: "Apple CEOs page",
    //         data: executiveData
    //     },
    //     partials: {
    //         partial: "partial-ceos"
    //     }
    // });
});

module.exports = router;
