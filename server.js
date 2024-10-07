const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.json());

let goods=[];


app.post('/add', (req, res) => {
  try{const good =req.body;
    console.log(good);
    goods.push(good);
    console.log(goods);
    let result=goods;
    console.log("Goods array: " + JSON.stringify(goods, null, 2))
    res.json({result})}
       
       catch (error) {
        console.error('Error in /number route:', error.message);
        res.status(400).json({ error: error.message });
      }
});

app.post('/select', (req, res) => {
  try{const selection =req.body;
    console.log(selection);
    
    
    
    // console.log("Goods array: " + JSON.stringify(goods, null, 2))
    // res.json({result})
  }
       catch (error) {
        console.error('Error in /number route:', error.message);
        res.status(400).json({ error: error.message });
      }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });