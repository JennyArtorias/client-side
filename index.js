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
  console.log(sat1[0].id)
  
  document.body.innerHTML = example({ name: name1 });




})

    document.getElementbyId('test').addEventListener('click', function() {
      
        xhr.get('https://api.wheretheiss.at/v1/satellites/' + 25544, function (err, data) {
          if (err) {
              console.log(err)
          }
            
            var allStat = JSON.parse(data.body.replace('/[|]/g', ''))
            document.body.innerHTML = test(allStat)
      

    })
    
   

    console.log(allStat)
    console.log(typeof allStat)
    console.log(test)


    // document.body.innerHTML = example({id: statParse});



})






