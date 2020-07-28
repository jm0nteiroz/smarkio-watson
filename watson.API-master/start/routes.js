"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");


Route.group(() => {
  Route.get("/comment", "CommentController.index");
  Route.post("/comment", "CommentController.store");
  Route.put("/comment/:id", "CommentController.update");
  Route.delete("/comment/:id", "CommentController.destroy");
}).prefix("v1");

Route.group(() => {
  Route.post("/watsonConnect", "WatsonController.connectWatson");
  Route.get("/watsonConversation", "WatsonController.list");
}).prefix("v1");
