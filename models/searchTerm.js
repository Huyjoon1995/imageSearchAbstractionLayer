var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**/
var seachTermSchema = new Schema (
  {
    searchVal: String,
    searchDate: Date
  },{timestamps:true}
);

var ModelClass = mongoose.model('searchTerm', seachTermSchema);
module.exports = ModelClass;
