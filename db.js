const mongoose = require('mongoose');

mongoose.connect('mongodb://ratingsuser:ratingspassword@mongodb-26-rhel7.workshop.svc.cluster.local:27017/ratingsdb', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
