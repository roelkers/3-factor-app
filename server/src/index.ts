import express from "express";
import keys from "./keys";
// Express App Setup
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
// app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
// Initialize knex.

// Give the knex instance to objection.

app.get('/hi', async (req,res) => {
  res.send("hi")

})

app.post('/student/enrolled', (req,res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(5000, (err) => {
  console.log("Listening");
});
