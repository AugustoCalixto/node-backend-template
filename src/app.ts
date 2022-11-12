import express from 'express';
import dotenv from 'dotenv';
import { RockAndRoll } from './apis/promisse';

dotenv.config();
const app = express()


app.get('/', (req, res) => {
  const rock = new RockAndRoll();
  rock.getData()
    .then((data) => {
      res.send('Hello World!');
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});