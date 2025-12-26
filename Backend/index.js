import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://13.232.195.82:3000", // Production frontend URL
        ],
        credentials: true,
    }
));

//API ROUTES
app.get("/api/message",(req,res)=>{
     res.json({
        message: "Hello From Backend"
     });
});


const PORT = 5000;
app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server is running on port http://localhost: ${PORT}`);
})