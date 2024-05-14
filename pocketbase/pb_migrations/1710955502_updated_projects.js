/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  collection.listRule = "created_by = @request.auth.id "
  collection.viewRule = "created_by = @request.auth.id "
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "created_by = @request.auth.id "
  collection.deleteRule = "created_by = @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
