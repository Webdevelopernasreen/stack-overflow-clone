import  express  from "express";

import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js'
import dotenv from "dotenv";
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js'
// import connectDB from "./connectMongoDb.js";


const app=express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
 res.send("this is a response body");
})
app.use('/user',userRoutes);
app.use('/questions',questionRoutes);

app.use('/answer',answerRoutes);
const PORT=process.env.PORT || 5500;

// connectDB();
const DATABASE_URL=process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
}).catch((err)=>{
    console.log(err.message)
})
// import mongoose from "mongoose";
// const CONNECTION_URL="mongodb+srv://webdeveloper:webdeveloper@cluster0.iuz0c9s.mongodb.net/?retryWrites=true&w=majority";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(CONNECTION_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// export default connectDB;