/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cyx7fighsrcfx8l")

  collection.viewRule = "@request.auth.id = created_by || members ~ @request.auth.id || (@collection.invites.team ?= id && @collection.invites.email ?= @request.auth.email)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cyx7fighsrcfx8l")

  collection.viewRule = "@request.auth.id = created_by || members ~ @request.auth.id || (@collection.invites.team ?= id && @collection.invites.email ~ @request.auth.email)"

  return dao.saveCollection(collection)
})
