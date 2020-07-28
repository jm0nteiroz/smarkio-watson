"use strict";

const Comment = use("App/Models/Comment");

const DeletedAt = use("App/Services/DeletedAt");

const Database = use("Database");

class CommentController {

  async index() {
    const watsonComment = await Database.table("comments")
      .select(
        "comments.id",
        "comments.comment",
        "comments.created_at",
        "comments.updated_at"
      )
    return watsonComment;
  }

  async store({ request, response }) {
    let data = request.only(["comment"]);
    const comment = await Comment.create(data);
    return comment;
  }

  async update({ params, request }) {
    let data = request.only([
      "name",
      "email",
      "password",
      "document",
      "phone",
      "address",
      "type_document",
    ]);

    const user = await User.query()
      .where("secure_id", params.id)
      .where("deleted_at", null)
      .firstOrFail();

    user.merge(data);

    await user.save();

    return user;
  }

  async destroy({ params, request, response }) {
    const user = await User.query().where("secure_id", params.id).firstOrFail();
    await DeletedAt.deleted(user);
    return user;
  }
}

module.exports = CommentController;
