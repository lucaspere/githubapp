const mongoose = require('mongoose');

const reposSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   description: {
      type: String,
      required: true,
   },
   avatar_url: {
      type: String
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