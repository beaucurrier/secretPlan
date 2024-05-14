/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5pu7hhlblfh8ts")

  collection.listRule = "@request.auth.id = team.created_by || team.members ~ @request.auth.id || @request.auth.email = email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5pu7hhlblfh8ts")

  collection.listRule = null

  return dao.saveCollection(collection)
})
