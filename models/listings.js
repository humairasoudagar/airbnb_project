const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const listingsSchema = new Schema ({
    
  title: {
    type: String,
    required: true
  },

  description: String,

  image: {
    filename: {
      type: String,
      default: "listingimage"
    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/landscape-photography-of-seashore-under-cumulus-clouds-U6t80TWJ1DM"
    }
  },

  price: Number,
  location: String,
  country: String
});
module.exports =
  mongoose.models.Listings || mongoose.model("Listings", listingsSchema);