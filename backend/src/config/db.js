
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const Connect =  () => {
    // const URL = `mongodb+srv://kriti:kriti@cluster0.jxvc56p.mongodb.net/bug`
    const URL = 'mongodb+srv://kriti:kriti@cluster0.jxvc56p.mongodb.net/buguser'
    try {
        mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected  successfully");
        
    } catch (err) {
        console.log("Error while connecting with the Database", err)
    }

    // return mongoose.connect(URL)
}

module.exports = Connect;

