/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5pu7hhlblfh8ts")

  collection.viewRule = "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email"
  collection.createRule = "@request.auth.id = team.created_by || team.members ~ @request.auth.id"
  collection.updateRule = "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email"
  collection.deleteRule = "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5pu7hhlblfh8ts")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
