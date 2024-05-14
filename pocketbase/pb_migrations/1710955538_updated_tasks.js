/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g85q13y4ejuchnl")

  collection.listRule = "project.created_by = @request.auth.id"
  collection.viewRule = "project.created_by = @request.auth.id"
  collection.createRule = "project.created_by = @request.auth.id"
  collection.updateRule = "project.created_by = @request.auth.id"
  collection.deleteRule = "project.created_by = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g85q13y4ejuchnl")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
