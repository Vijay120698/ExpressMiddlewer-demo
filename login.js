// 
const express = require('express');
const login = express.Router();



let data = [
  { id: 1, name: 'vijay', email: 'john@example.com' },
  { id: 2, name: 'sijo', email: 'jane@example.com' }
];

login.post('/', (req, res) => {
  res.json(data);

});

// router.get('/data/:name',(req,res)=>{     //Route Parameter
//   console.log(req.params)
//   res.send(req.params)
// })

// router.get('/data/:name',(req,res)=>{     //To access the value
//   console.log(req.params.name)
// })

login.get('/data/:name',(req,res)=>{    
  const {name}=req.params       //to find data from array of objects

  const find=data.find((m)=>m.name ===name)
  res.send(find)
   console.log(find)
})

login.all('/all/data', (req, res) => {
  res.send("http wild card method");

  
});


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports=login;