const dbConnect= require('./mongodb.js');

  async function readData() {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
  }

  async function insertData() {
    let data = await dbConnect();
    
    data.insertMany(
      [
          {first_name:'karan',last_name:'singla',age:25,gender:'male'},
          {first_name:'kunal',last_name:'chawla',age:24,gender:'male'},
      ]
  ).then((result)=> {
    if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
  })
  
  }

  readData();