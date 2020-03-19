const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://githubapp:mydatabaseforlett@cluster0-m1iem.mongodb.net/github-repos-app?retryWrites=true&w=majority',
   { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
