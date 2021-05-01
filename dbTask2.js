var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite3');
db.serialize(function() {
  db.each("SELECT rowid AS id, Country,Population,Area FROM Countries", function(err, row) {
      console.log(row.id + ": " + row.Country + " / Население : " + row.Population + " / Площадь : " + row.Area);
    });
    db.all("SELECT Country,Population,Area FROM Countries", function(err, rows){
      var wholePopulation= rows[0].Population+rows[1].Population+rows[2].Population+rows[3].Population;

      var whole = function(wholePopulation) {
        return wholePopulation < 2000000000 ? "1" : wholePopulation;
      };
      module.exports = whole;


      if(wholePopulation>=2000000000){
        console.log("\nОбщее население всех 4х стран больше 2 млрд человек : "+wholePopulation);
      }else{
        console.log("\nОбщее население всех 4х стран меньше 2 млрд человек : "+wholePopulation);
      }
      var sum = rows[2].Population/rows[2].Area;
    if(sum<=50){
      console.log("Плотность населения "+rows[2].Country+" меньше 50 чел./кв.км. "+ sum)
    }else{
      console.log("Плотность населения "+rows[2].Country+" больше 50 чел./кв.км. "+ sum)
    }
    console.log("ВОТ: "+wholePopulation+"\n И ВОТ:"+sum)
});
});
db.close();
