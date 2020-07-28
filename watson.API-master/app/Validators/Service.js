"use strict";

class Service {
  get rules() {
    return {
      service: "required|alpha|unique:services,service",
      duration: "required",
      value: "required|number",
      free_redial_period: "required",
      markdown_value: "required|number",
    };
  }
}

module.exports = Service;
