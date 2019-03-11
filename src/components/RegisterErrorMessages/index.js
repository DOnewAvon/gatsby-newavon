import $ from 'jquery'; 


export default props =>  
    window.addEventListener('load', function () {
        $(".toggle-password").click(function () {
            var input = $($(this).attr("toggle"));
            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
        
    })
    
  