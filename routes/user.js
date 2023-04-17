const { Router } = require("express");
const { check } = require("express-validator");

const { validateSlots } = require("../middlewares/validationSlots");
const { isRoleValid, isEmailExist, isExistID } = require("../helpers/dbValidators");

const { newUser, updateUser } = require("../controllers/user");

const router = Router();

router.post(
   "/",
   [
      check("name", "Name is required").not().isEmpty(),
      check("password", "Password is required and must have more than 6 digits").isLength({ min: 6 }),
      check("email", "Invalid Email").isEmail(),
      check("email").custom(isEmailExist),
      check("rol").custom(isRoleValid),
      validateSlots,
   ],
   newUser
);

router.put("/:id",[
   check('id',"Invalid ID").isMongoId(),
   check('id').custom(isExistID),
   validateSlots
],updateUser)

module.exports = router;
