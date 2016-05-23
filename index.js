var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  // console.log(typeof data.body)
  var sat1 = JSON.parse(data.body.replace('/[|]/g', ""))
  // console.log(sat[0])
  // console.log(sat[0].name)
  var name1 = sat1[0].name




  document.body.innerHTML = example({ name: name1 });
})

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function (err, data) {
  if (err) console.log(err)

    var allStat = JSON.parse(data.body.replace('/[|]/g', ''))

    var statParse = allStat

    console.log(statParse)



})






