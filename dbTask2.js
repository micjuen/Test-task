var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite3');
db.serialize(function() {
  db.each("SELECT rowid AS id, Country,Population,Area FROM Countries", function(err, row) {
      console.log(row.id + ": " + row.Country + " / Население : " + row.Population + " / Площадь : " + row.Area);
    });
    exports.subTask1 = function(){
    db.all("SELECT Country,Population,Area FROM Countries", function(err, rows){
      var wholePopulation= rows[0].Population+rows[1].Population+rows[2].Population+rows[3].Population;
      if(wholePopulation>=2000000000){
        console.log("\nОбщее население всех 4х стран больше 2 млрд человек : "+wholePopulation);
      }else{
        console.log("\nОбщее население всех 4х стран меньше 2 млрд человек : "+wholePopulation);
        return 'True';
      }
    });
  },
  exports.subTask2 = function(){
    db.all("SELECT Country,Population,Area FROM Countries", function(err, rows){
    var U =rows[2].Population/rows[2].Area;
    if(U<=50){
      console.log("Плотность населения "+rows[2].Country+" меньше 50 чел./кв.км. "+ U)
      return 'True';
    }else{
      console.log("Плотность населения "+rows[2].Country+" больше 50 чел./кв.км. "+ U)
    }
  });
};
});
db.close();
