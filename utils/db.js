const mongoose = require('mongoose');

module.exports = function () { 
  mongoose.connect("mongodb://localhost:27017/Blog",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected Successfully');
  })
  .catch((err) => {
    console.error('Database Connection Failed');
  });
}