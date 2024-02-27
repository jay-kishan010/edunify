// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));
const storage=multer.diskStorage(   {
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename: (req, file, cb) =>{
cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname));
    }
})

const upload=multer({
    storage:storage
})

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'school_management'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});


// Routes
app.post('/api/schools',upload.single('image'), (req, res) => {
  const { name,board, location, establishedYear} = req.body;
  const image=req.file.filename;
  const INSERT_SCHOOL_QUERY = `INSERT INTO schools (name,board, location, established_year, image) VALUES (?, ?, ?,?,?)`;
  db.query(INSERT_SCHOOL_QUERY, [name,board, location, establishedYear, image], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving school');
    } else {
      res.status(201).send('School added successfully');
    }
  });
});

app.get('/api/schools', (req, res) => {
  const SELECT_SCHOOLS_QUERY = `SELECT * FROM schools`;
  db.query(SELECT_SCHOOLS_QUERY, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving schools');
    } else {
      res.status(200).json(result);
    }
  });
});

// app.get('/',(req,res)=>{
//     const sql='select * from schools';
//     db.query(sql,(err,result)=>{
//         if(err) return  res.json("Error");

//         return res.json(result);
//     } )
// })

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
