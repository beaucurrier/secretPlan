/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "auadi3g5",
    "name": "team",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cyx7fighsrcfx8l",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("toau7du309tc6lh")

  // remove
  collection.schema.removeField("auadi3g5")

  return dao.saveCollection(collection)
})
