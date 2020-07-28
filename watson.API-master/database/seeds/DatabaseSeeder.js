"use strict";

const Address = use("App/Models/Address");

const Role = use("Role");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class DatabaseSeeder {
  async run() {
    const roleAdmin = new Role();
    roleAdmin.name = "Administrator";
    roleAdmin.slug = "admin";
    roleAdmin.description = "manage administration privileges";
    await roleAdmin.save();

    const roleProfessional = new Role();
    roleProfessional.name = "Professional";
    roleProfessional.slug = "professional";
    roleProfessional.description = "manage professional privileges";
    await roleProfessional.save();

    const roleClient = new Role();
    roleClient.name = "Client";
    roleClient.slug = "client";
    roleClient.description = "manage client privileges";
    await roleClient.save();

    const address = await Address.create({
      zipcode: "05606-100",
      street: "Avenida Morumbi",
      number: "458",
      complement: "de 1002 a 2004 - lado par",
      district: "Morumbi",
      city: "São Paulo",
      state: "SP",
    });

    const user = await User.create({
      name: "admin",
      email: "admin@admin.com",
      password: "admin",
      type_document: "cpf",
      document: "00000000000",
      phone: "000000",
      address_id: address.id,
      category_id: null,
    });
    await user.roles().attach([roleAdmin.id]);
  }
}

module.exports = DatabaseSeeder;
