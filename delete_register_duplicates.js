db.boletoHibrido.aggregate([{ "$group": { _id: {idTitulo: "$idTitulo"}, total: {$sum: 1}}},
{ "$match": { total: {"$gt": 1}}},
],{ allowDiskUse : true })
.forEach( function(doc) { print( 'db.boletoHibrido.deleteOne({idTitulo:' + doc._id.idTitulo + ',nossoNumero:{$exists:false}})' ); });
