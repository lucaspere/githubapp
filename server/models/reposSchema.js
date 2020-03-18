const mongoose = require('mongoose');

const reposSchema = new mongoose.Schema({
   id: {
      type: Number,
      unique: true,
   },
   name: {
      type: String,
      required: true,
      trim: true,
   },
   description: {
      type: String,
      required: true,
   },
   owner: {
      type: Object
   },
   html_url: {
      type: String
   },
   updated_at: {
      type: Date
   },
   stargazers_count: {
      type: Number
   },
   language: {
      type: String
   },
   license: {
      type: Object || null
   }
})

const Repos = mongoose.model('Repos', reposSchema);

module.exports = Repos