const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://dno:<0Qa4Ju3QRY3jOm37>@demo-db.eis9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

