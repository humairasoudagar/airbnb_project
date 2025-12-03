const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listings =require("../models/listings.js");
app.get("/", (req, res) =>{
    res.send("Hi I'm root")
})
const MONGO_URL="mongodb://127.0.0.1:27017/wonderlust";
main().then(() => {
    console.log("connect to DB");
}).catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.get("/testlistings", async(req, res) => {
    let sampleListing = new Listings({
        title: "My New Villa",
        description :" Beach House",
        price: 1400,
        location: "Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("successful testing ");
} );

app.listen(8080,() => {
    console.log("app is listening to port 8080");

});