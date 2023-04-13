const { response: resp } = require("express");

const getController = (req, res = resp) => {
   res.json({ msg: "Hello World ,say hi" });
};

module.exports = {
   getController,
};
