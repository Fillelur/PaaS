const express = require('express'),
  path = require('path')

const app = express()

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})



const dotenv = require('dotenv'),
  { Client } = require('pg')


  dotenv.config()


  const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()


app.get('/api', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM cities WHERE population > $1',
    [0]
  )

  response.send(rows)
})
