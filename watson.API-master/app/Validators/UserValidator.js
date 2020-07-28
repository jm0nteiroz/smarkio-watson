"use strict";

class UserValidator {
  get rules() {
    return {
      name: "required|min:3",
      email: "required|email",
      password: "required",
      document: "required|unique:users",
      phone: "required",
      address: "required",
      profile: "required|in:client,professional",
      type_document: "required|in:cpf,cnpj",
      category_id: "required_when:profile:professional",
    };
  }
}

module.exports = UserValidator;
