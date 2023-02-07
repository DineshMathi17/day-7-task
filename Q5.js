// Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    let count=0
    let output=result.filter((result) =>  {
    for (let key in result.currencies) {
        if(result.currencies[key].name === "United States dollar"){
            console.log(result.currencies[key].symbol,result.name.common);
         count++;
      }
    }
  })
  console.log(count);   
}