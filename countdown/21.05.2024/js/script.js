  const date = document.querySelector(".Days");
  const hours = document.querySelector(".Hours");
  const mintues = document.querySelector(".Mintes");
  const seconds = document.querySelector(".Seconds");

    updateTime();

 function updateTime(){

 const currentyear = new Date().getFullYear();
 const newyear = new Date(`Jan 1 ${currentyear+1} 00:00:00`);
const currentdate = new Date();
const diff = newyear.getTime() - currentdate.getTime();
 const d  =  Math.floor(diff/1000/60/60/24);
 const h  = Math.floor((diff/1000/60/60)%24);
 const m  = Math.floor((diff/1000/60)%60);
 const s = Math.floor((diff/1000)%60);


date.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
mintues.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;



 }
setInterval(updateTime,1000);




           

