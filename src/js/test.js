var currentDate = new Date();
console.log(currentDate);

var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
console.log(formatted_date);