const {
  userSchema,
  User,
  createUser,
  findOneByEmail,
} = require("../users/user.model");
const { getHash, comparePass } = require("../utils/bcript");

const register = async (req, res, next) => {
  const value = await userSchema.validateAsync(req.body);
  const hash = await getHash(value.password);
  const user = new User({
    username: value.username,
    email: value.email,
    password: hash,
    role: value.role && value.role,
    createdAt: Date(),
  });

  createUser(user)
    .then((result) => {
      res.json({ result });
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = async (req, res, next) => {
  const value = await userSchema.validateAsync(req.body);
  findOneByEmail(value.email)
    .then((result) => {
      comparePass(value.password, result.password)
        .then((result) => {
          if (result) {
            res.status(200).json({
              message: "Connected !",
            });
          } else {
            res.status(400).json({ error: "Wrong password !" });
          }
        })
        .catch((error) => {
          res.staus(401).json(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { register, login };
