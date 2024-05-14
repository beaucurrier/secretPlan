/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8su4mckt6tgiy")

  collection.listRule = "project.created_by = @request.auth.id || project.team.created_by ~ @request.auth.id || project.team.members ~ @request.auth.id || team.created_by ~ @request.auth.id || team.members ~ @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8su4mckt6tgiy")

  collection.listRule = "project.created_by = @request.auth.id  || project.team.created_by ~ @request.auth.id || project.team.members ~ @request.auth.id"

  return dao.saveCollection(collection)
})
