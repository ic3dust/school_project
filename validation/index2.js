export const validationRules = {
    "email":{
        "pattern":"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
        "errorMessage":"Invalid email address"
    },
    "password":{
        "minLength":8,
        "uppercase":"(?=.*[A-Z])",
        "lowercase":"(?=.*[a-z])",
        "number":"(?=.*\\d)",
        "specialCharacter":"(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])",
        "noSpace":"(?!.*\\s)",
        "errorMessages":{
            "minLength":"Password must be at least 8 chars long",
            "uppercase":"Password must contain at least one uppercase",
            "lowercase":"Password must contain at least one lowercase",
            "number":"Password must contain at least one number",
            "specialCharacter":"Password must contain at least one special char(#$%...)",
            "noSpace":"Password cannot contain spaces",
            "equalCurrent":"New password must differ from the current",
            "enterCurrent":"Enter your current password",
            "confirm":"Paswords do not match"
        }
    },
    "userName":{
        "pattern": "^[A-Za-z]+$",
        "errorMessage":"Invalid username"
    }
}