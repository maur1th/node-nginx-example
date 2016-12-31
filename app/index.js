const express = require('express')
var pjson = require('./package.json')


// App setup
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({
    'message': 'hello, world',
    'version': pjson.version
  })
})

// Server
app.listen(3000, function () {
  console.log('Attendee app listening on port 3000!')
})
