const query = (mongoClient, queryFunction) => {
  mongoClient.connect(
    "mongodb://kamesennin-discord:" +
      process.env.MONGO_AZURE_DB_TOKEN +
      "==@kamesennin-discord.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@kamesennin-discord@",
    queryFunction
  );
};

export const connectionLogQuery = (mongoClient, userName) => {
  var discordConnection = {
    discordUser: userName,
    timeStamp: new Date().getTime(),
  };
  const queryFunction = function (err, db) {
    if (err) throw err;
    var dbo = db.db("kamesennin-discord");
    dbo
      .collection("ConnectionLog")
      .insertOne(discordConnection, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
  };
  query(mongoClient, queryFunction);
};

export default query;
