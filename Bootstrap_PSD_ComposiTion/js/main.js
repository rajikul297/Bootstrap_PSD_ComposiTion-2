$(document).ready(function(){
      $('.slider').bxSlider();
    
//    sticky 
    $('.slider_area').waypoint(function(direction){
        if(direction== 'down'){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky')
        }
    })
    }); 

