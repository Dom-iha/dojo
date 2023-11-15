const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
   MongoClient.connect(
      'mongodb+srv://taqibrahim:taqibrahim@cluster0.kbafqt7.mongodb.net/?retryWrites=true&w=majority'
   ).then(client => {
      console.log("You successfully connected to MongoDB!");
      _db = client.db()
      callback();
   }).catch(err => {
      console.log(err);
      throw err
   });
};

const getDb = () => {
   if (_db) {
      return _db;
   }
   throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;