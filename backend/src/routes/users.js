const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(409).send({ message: "User with given email already exists!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hashPassword });
        await newUser.save();
        console.log(`User ${newUser.email} registered successfully`); // Log success message
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during registration:", error.message); // Log error message
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
