// allowDiskUse operations:
// Query primária:
db.getCollection('accountTransactions').aggregate([
    { $group: { _id: {accountInternalId: "$accountInternalId", transactionInternalId: "$transactionInternalId"}, total: { $sum: 1 } } },
    { $match: { total: { $gt: 1 } } }])
// "errmsg": "Exceeded memory limit for $group, but didn't allow external sort. Pass allowDiskUse:true to opt in."
// --------------------------------------------------------------------------------------
// Query com parâmetro:
db.getCollection('accountTransactions').aggregate([
    { $group: { _id: {accountInternalId: "$accountInternalId", transactionInternalId: "$transactionInternalId"}, total: { $sum: 1 } } },
    { $match: { total: { $gt: 1 } } } ] { allowDiskUse : true });
