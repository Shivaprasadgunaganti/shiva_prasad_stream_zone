// export const API_KEY='AIzaSyDJA6Sb-auSj8hiT6shUzKZUpGsU92xw9U'
// export const API_KEY=`AIzaSyC4ideE2KFIP90UpjeL_4Kmhtqm2lOpnOQ`
// export const API_KEY=`AIzaSyDJA6Sb-auSj8hiT6shUzKZUpGsU92xw9U`
// export const API_KEY='AIzaSyBU44tHVBMP7ljH-Xlirqs_AaVQihf3wdk'
export const API_KEY='AIzaSyDLxcd5VH9yrEic692osPh5hpPlV-QztBU'

export const value=(value)=>{
   
   if(value>=1000000){
return Math.floor(value/1000000)+'M'
   }
   else if(value>=1000){
    return Math.floor(value/1000)+'K'
   }
   else {
    return value;
   }
} 