import express from 'express'

const app = express();

const port = process.env.PORT || 5000;



app.get('/', (req , res) => {
  res.send('server is ready are you ?? ');
})

app.listen(port , ()=> {
  console.log(`Server at http://localhost:${port}`);
})

app.get('/api/cars' , (req , res) => {

    const cars = [
      {
        id : 1 , 
        name : '𝑩𝑴𝑾',
        money : 10000000,
      },
            {
        id : 2 , 
        name : 'Mercdes',
        money : 100000000,
      },
            {
        id : 3 , 
        name : 'Honda',
        money : 100000,
      },
            {
        id : 4 , 
        name : 'LAMBORGINI',
        money : 1000000000,
      }
    ]

    res.send(cars);
} )

