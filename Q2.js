// Get all the countries with a population of less than 2 lakhs using Filter function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    let array=[];
    
    for(let i in result){
        array.push(result[i].population);
    }    
    let output=array.filter(checkpopulation);
       function checkpopulation(data){
          if(data<200000){
              return data;
            }
        }  
 console.log(output);     
}