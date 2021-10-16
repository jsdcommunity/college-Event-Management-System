const studentHelper = require("../helpers/studentHelper");
const ErrorResponse = require("../classes/errorResponse");

module.exports = {
  indoorStudent: (req, res, next) => {
    res.status(200).json({
      success: true,
      error: 0,
      errormsg: "",
      data: "Hii I'm Indoor Student's Route",
    });
  },
    /**
   * Signup for Student with some credential
   * @method POST
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */ 
  signup: (req, res, next) => {
    req.body.role = "Indoor Student";
    studentHelper
      .signup(req.body)
      .then((result) => {
        res.status(201).json({
          success: true,
          data: result,
        });
      })
      .catch((err) => {
        return next(new ErrorResponse(err.message, 400));
      });
  },
};
