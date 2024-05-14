/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  collection.listRule = "created_by = @request.auth.id || team.members ~ @request.auth.id || team.created_by = @request.auth.id"
  collection.viewRule = "created_by = @request.auth.id || team.members ~ @request.auth.id || team.created_by = @request.auth.id"
  collection.updateRule = "created_by = @request.auth.id || team.members ~ @request.auth.id || team.created_by = @request.auth.id"
  collection.deleteRule = "created_by = @request.auth.id || team.members ~ @request.auth.id || team.created_by = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  collection.listRule = "created_by = @request.auth.id "
  collection.viewRule = "created_by = @request.auth.id "
  collection.updateRule = "created_by = @request.auth.id "
  collection.deleteRule = "created_by = @request.auth.id "

  return dao.saveCollection(collection)
})
