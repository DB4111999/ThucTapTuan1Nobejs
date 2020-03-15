var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost', function (err, db) {
    //neu ket noi khong thanh cong thi in ra loi
    if (err) throw err;
    //neu thanh cong thi log ra thong bao
    console.log('Ket noi thanh cong');
    db.close();
    console.log('close thanh cong');
});