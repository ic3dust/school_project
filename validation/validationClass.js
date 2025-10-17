import { validationRules } from "./index2.js";

export class ValidationPage{
    constructor(){
        this.errors={};
    }

static validatePattern(value,pattern){
    const regex = new RegExp(pattern);
    return regex.test(value);
}
validateEmail(email){
    const rule = validationRules.email;
    this.errors.email = [];

    if(!ValidationPage.validatePattern(email,rule.pattern)){
        this.errors.email.push(rule.errorMessage);
    }
    if (this.errors.email.length === 0){
        delete this.errors.email;
    }
}
validateName(value, fieldName) {
    const rule = validationRules.userName;
    if (!ValidationPage.validatePattern(value, rule.pattern)) {
        this.errors[fieldName] = rule.errorMessage;
    } else {
         delete this.errors[fieldName];
    }
}
validatePassword(value) {
    const rules = validationRules.password;
    const errors = [];

    if (value.length < rules.minLength) {
        errors.push(rules.errorMessages.minLength);
    }
    if (!ValidationPage.validatePattern(value, rules.uppercase)) {
        errors.push(rules.errorMessages.uppercase);
    }
    if (!ValidationPage.validatePattern(value, rules.lowercase)) {
        errors.push(rules.errorMessages.lowercase);
    }
    if (!ValidationPage.validatePattern(value, rules.number)) {
        errors.push(rules.errorMessages.number);
    }
    if (!ValidationPage.validatePattern(value, rules.specialCharacter)) {
        errors.push(rules.errorMessages.specialCharacter);
    }
    if (!ValidationPage.validatePattern(value, rules.noSpace)) {
        errors.push(rules.errorMessages.noSpace);
    }
    if (errors.length > 0) {
        this.errors.password = errors;
    } else {
        delete this.errors.password;
    }
}
validateForm(data){
    this.errors = {};
    this.validateEmail(data.email);
    this.validateName(data.userName);
    this.validatePassword(data.password);
    return this.errors;
}

}
