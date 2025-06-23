const authMiddleWare = (req, res, Next) => {
  console.log("AuthMiddleWare is working");
  Next();
};

module.exports = { authMiddleWare };
