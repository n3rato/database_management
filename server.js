import express from "express"
import pg from "pg";
import dotenv from 'dotenv'

dotenv.config();


const app = express();

const {Client} = pg;


const client = new Client();

//const client = new Client ({
    //user: process.env.PG_USER,
    //password: process.env.PG_PW,
    //database: process.env.PG_DB,
    //host: process.env.PG_HOST,
  //  port: process.env.PG_PORT
//});

connect();

async function connect() {

    try {
        await client.connect();
        console.log('Database connected...');

    } catch (error){
        console.log(error.message);
    }
       

}
app.listen(3001, () => {
    console.log('Server is running n port 3001')
});

app.get('/genre', async (req,res) => {
    res.send('genre')
}); 

app.get('/movie', async (req,res) => {
    res.send('movie')
});
app.get('/users', async (req,res) => {
    res.send('users')
});
app.get('/review', async (req,res) => {
    res.send('review')
});
app.get('/favourite', async (req,res) => {
    res.send('favourite')
});