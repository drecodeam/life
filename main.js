$(document).ready(function(){



window.fbAsyncInit = function() {
    FB.init({
      appId      : '298044230209468', // App ID
      channelUrl : '//ankuranand.in/life/', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here




$('#fb').click(function(){
$('#fb .social').css("visibility","hidden");
$('#fb p').css({'font-size':'46px','letter-spacing':'0px'})
$('#fb > p').html('Connected. Explore - ');
FB.login(function(response)
{
   
   
   
   
   
   if (response.authResponse)
   {
    var accessToken=response.authResponse.accessToken;

        FB.api('/me/albums', function(response)
	       {
		    
		  //function to get the cover photo of an album
			$.each(response.data, function(i,item)
			{
			    var coverphoto;
			    console.log(item);
			    if(item.cover_photo)
			    {
  
			    FB.api('/'+ item.cover_photo,function(response){
				    coverphoto=response.source;
				    			    //function to get all images in an album
			    
			    
			       FB.api('/'+item.id+'/photos', function(response)
			       {
		                    var imagetext='<div class="images col_9">';
                                    $.each(response.data, function photo(i,item)
                                        {
                                        imagetext = imagetext.concat('<a href="' + item.source +'" class="image" rel="group1" >'   +'<img src="' + item.source + '"width="200px" class="item"/></a>');                               
                                        });
						console.log('before');
			       
				imagetext=imagetext.concat('</div');
				if(item.description){
				    var text='<li class="container"><div class="name col_3" style="text-align:center"><img src="' + coverphoto + ' "><p class="name">'+item.name+ '<br></p>' + '<p class="date">' +  item.created_time.slice(0,10) + '</p><p class="desc">' + item.description+'</p></div>'+imagetext +'</li>'

				}
				else{
				     var text='<li class="container"><div class="name col_3" style="text-align:center"><img src="' + coverphoto + ' "><p class="name">'+item.name+ '<br></p>' + '<p class="date">' +  item.created_time.slice(0,10) + '</p></div>'+imagetext +'</li>'
 
				}
				$("#photos").append(text);
				var $container = $('.container .images');
				$container.imagesLoaded( function(){
				$container.masonry({
				itemSelector : '.item'
				      });
				    /* Apply fancybox to multiple items */
	
				    $("a.image").fancybox({
				    'transitionIn'	:	'elastic',
				    'transitionOut'	:	'elastic',
				    'speedIn'		:	600, 
				    'speedOut'		:	200, 
				    'overlayShow'	:	false
				});
	
			});
	
	
			console.log('done');
				 
				    
                                });

			    });

			}
			});
			
			
		    
    

		    
  
		    
			
		    
		    
		    
		
		});
	$('#photos').css("visibility","visible");
   } 







},{scope: 'user_photos'});

//the end
});


  };














  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     d.getElementsByTagName('head')[0].appendChild(js);
   }(document));


});