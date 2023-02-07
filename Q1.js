// Get all the countries from the Asia continent /region using the Filter function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
   let array=[];
   for(let i in result){
       array.push(result[i].region);
   }
   let out=result.filter((data)=>{
       if(data.region=='Asia'){
           return data;
       }

   })
   for(let i in out){
       console.log(out[i].name.common);
   }

  
}