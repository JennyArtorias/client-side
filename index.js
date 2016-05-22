var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  var sat = data.body[0].replace('/[|]/g', "")
  console.log(sat)
  console.log(data.body[0])
  

  document.body.innerHTML = example({ name: "Space" });
})

