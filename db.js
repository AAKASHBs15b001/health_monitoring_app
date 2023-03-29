const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/customerdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err));