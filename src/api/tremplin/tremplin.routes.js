const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "tremplin-numerique routes.",
    routes: {
      employees: {
        path: "/employees",
      },
    },
  });
});

router.get("/employees", (req, res) => {
  /*
   * Get the list of all employees
   * [
   *   {
   *       name: "Jon Doe",
   *       poste: "Sound designer"
   *       groupe: "Son",
   *       description: "Lorem ipsum dolor sit amet..."
   *   },
   *   ...
   * ]
   */
});

module.exports = router;
