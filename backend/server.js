import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to the server");
});

  
const port=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to database MONGO CONNECTION OPEN!!!")
    }
    )
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!");
        console.log(err)
    });

/*
    if(process.env.NODE_ENV === 'production')
    {
    
        app.use('/', express.static('../client/build'));

        app.get('*',(req,res)=>{
          res.sendFile(path.resolve(__dirname,'client/build/index.html'));
        });

    }

    */
  
    app.listen(port,(req,res)=>{
        console.log("server started at port 5000")
    });




