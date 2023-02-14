const express = require('express')

const app = express()

app.get("/", req => {
  send
})

const PORT = process.env.PORT

app.listen(PORT, ()=> {
  console.log("listening on ", PORT)
})