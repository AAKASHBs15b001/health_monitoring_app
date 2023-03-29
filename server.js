var express = require("express");
var app = express();
const bodyParser = require('body-parser');

const mongodb = require('mongodb');


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kathabs15b001:3gTImfXvU1ALmDrM@cluster0.bsj471n.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err));

module.exports=mongoose




const router = express.Router();
const Customer = require('./customerdetailmodel');
const health=   require('./customerhealthmodel');


// Create a new customer
app.post('/post/customer', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



// Create a new customer
app.post('/post/health', async (req, res) => {

const documentId = new mongodb.ObjectId(req.body["_id"]);

// Find a customer document by its ID and create a new order document

const data=Customer.findOne({ _id: documentId })

console.log('this is data',data)

   try{
  // Create the new order document
  const healthdata= new health({ customerID:documentId, type: req.body["type"],date:req.body["date"],value:req.body["value"]})
  await healthdata.save()
  res.status(201).json(healthdata);
} catch (err) {
  console.error(err);
  res.status(500).send('Server Error');
}
// const healthmatch=health.find({customerID:documentId,type:"Calories"})
const result =await health.aggregate([
    {$match:{$and: [{ customerID:documentId },{type:req.body['type']}] }},
    { $group: { _id: '$customerID', sum: { $sum:"$value" } } }
  ]).exec();
console.log(result,data.firstName,'health result json')
var thing={}
if (req.body['type']==="Calories"){
 thing={...req.body,avgCalories:result[0].sum}
}
if (req.body['type']==="Sleep"){
    thing={...req.body,avgSleep:result[0].sum}
   }
   if (req.body['type']==="Step"){
    thing={...req.body,avgStep:result[0].sum}
   } 

  
data.avgCalories=result[0].total
Customer.updateOne({_id:documentId}, thing).then(res=>console.log(res,'----'));})



app.get('/api/documents', function(req, res) {
    const data=Customer.find({}).then(data=>res.json(data))  
    return data
    });


app.get('/api/charts', function(req, res) {
    health.find({customerID:"642326d96e3b47843494039b"}).sort({ date: 1 }).then( result => {
        // if (err) throw err;
        const data = result.map((item) => ({ name:[item.date],value: item.value }));
        return res.json(data)
      });
    });


app.get('/health/documents', function(req, res) {
    const data=health.find({}).then(data=>res.json(data))  
    return data
    });


app.put('/api/documents/:id', function(req, res) {
    const documentId = new mongodb.ObjectId(req.params.id);

        Document.findByIdAndUpdate(documentId, req.body, { new: true }, function(err, document) {
          if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
          } else {
            res.json(document);
          }
        });
      });





app.listen(3000, () => {
    console.log("Server running on port 3000");
   });












