const createCategory = (req, res) => {
  let { name, image, description } = req.body;
  res.send(req.body);
};

module.exports = { createCategory };
