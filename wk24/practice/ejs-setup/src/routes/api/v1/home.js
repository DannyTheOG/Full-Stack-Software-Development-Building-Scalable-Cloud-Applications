const express = require("express");
const { getHomeRouter, postHomeRouter } = require("../../../controller/api/v1/home");

const router = express.Router();

router.get("/", getHomeRouter);

router.post("/", postHomeRouter);


module.exports = router;
