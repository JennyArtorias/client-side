var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  // var sat = data.body[0].name.replace('/[|]/g', "")
  // console.log(sat)
  console.log(typeof data.body)
  console.log(JSON.parse(data.body))

  

  document.body.innerHTML = example({ name: "Space" });
})

