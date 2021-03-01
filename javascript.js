
function change(element)
{
   var new_img_src = element.src;
   var middleBar = document.getElementById('middle-bar-id');
   var accessImg = middleBar.getElementsByTagName('img')[0];

   accessImg.src = new_img_src;

}

