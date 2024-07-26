db.getCollectionInfos().forEach(function(coll) {
  //print( JSON.stringify( coll ))
  if (coll.type === "collection" ) {
     db[coll.name].getIndexes().forEach(function(index) {
        if ("id" !== index.name) {
           //print( JSON.stringify( index ))
           var indexKey = index.key  // save the key, and transform index into the "options"
           delete index.v
           delete index.key
           index.background = true // optional: force background to be true
           print("db." + coll.name + ".createIndex(" + JSON.stringify(indexKey) + ", " + JSON.stringify(index) + ")");
        }
     });
  }
});
