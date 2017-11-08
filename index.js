const { Pool } = require('pg')

const pool = new Pool({ // find this port using \conninfo 
  user: 'jeanine',
  host: 'localhost',
  database: 'super_awesome_application',
  password: process.env.password,
  port: 5432,
})

// Possible type of Promise example
// pool.query('select * from users').then(function(err,res){
//   console.log(res)
// })

pool.query('select * from users where id=1', (err, res) => {
  console.log(res.rows)
  //pool.end()
})