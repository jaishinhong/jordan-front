import Joi from "joi";

const registerSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .required()
        .messages({ "string.empty": "firstname is required" }),
    lastName: Joi.string()
        .trim()
        .required()
        .messages({ "string.empty": "password is required" }),
    email: Joi.string()
        .email({ tlds: false })
        .required()
        .messages({ "string.empty": "email is required" }),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.pattern.base":
                "password must be at least 6 charactors and contains only alphabet and number"
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({
            "any.only": "Password and Confirm password did not match",
            "string.empty": "Confirm password is required"
        })
});

export default function validateRegister(input) {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    // console.dir(error);
    if (error) {
        return error.details.reduce((acc, item) => {
            acc[item.path[0]] = item.message;
            return acc;
        }, {});
    }
}
