import dotenv from 'dotenv';
import express from 'express';
import connectToDB from './database/mongodb.js';
import router from './routes/routes.js';

dotenv.config();
const app = express();
const port:any = process.env.PORT || 8000;

connectToDB()
    .then((db) => {
        console.log("MongoDB connected...!");
    })
    .catch((error:any) => {
        console.log(error);
    });

    app.use(express.json());
app.use('/api', router);

app.listen((port), () => console.log(`Server running on port ${port}`));