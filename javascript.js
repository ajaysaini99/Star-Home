
function change(element)
{
   var new_img_src = element.src;
   var middleBar = document.getElementById('middle-bar-id');
   var accessImg = middleBar.getElementsByTagName('img')[0];

   accessImg.src = new_img_src;

}


function changeBg(){

   var pics = [
      'url("/bgImages/welcome.jpg")',
      'url("/bgImages/burano.jpg")',
      'url("/bgImages/homecar.jpg")',
      'url("/bgImages/blue-builds.jpg")',
      'url("/bgImages/white-houses.jpg")',
      'url("/bgImages/door.jpg")',
   ]
   let i=0;
   var bg = document.getElementById('welcomeId');
   var h1 = document.getElementById('welcomeId').getElementsByTagName('h1')[0];
   var para = document.getElementById('welcomeId').getElementsByTagName('p')[0];
   function swap_Images(){
      i = i % pics.length;
      bg.style.backgroundImage = pics[i];
     
     
      bg.style.transitionDuration = '4s';
      i++;
   }
   
   setInterval(swap_Images, 4000);

}
changeBg();

var timer_id;
function keep_changing(pics)
{
   var section = document.getElementById('section-1');
   var curr_img = section.getElementsByTagName('img')[0];
   let i=0;

   function run_image(){
      i = i % pics.length;
      curr_img.src = pics[i];
      // bg.style.transitionDuration = '4s';
      i++;
   }
   
    timer_id = setInterval(run_image, 2000);

}

function stop_changing(){

   clearInterval(timer_id);
}
