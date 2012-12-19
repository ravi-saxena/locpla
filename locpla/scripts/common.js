jQuery(function(){          
       if(window.localStorage.getItem("SearchType")!= null) {
            window.localStorage.getItem("SearchType")+'s';
        }        
});

    function OpenList() {

        window.location.href = "list.html";
}

function OpenMap(){

path.insertAt(path.length, event.latLng);
            alert(event.latLng);
            
    window.location.href="map.html?Type="+jQuery('#hdnid').val();
}

function SearchLoacation(){
    try
    {
    
    
//        jQuery.ajax({
//            type:'POST',
//            url:'./service/common.asmx/HelloWorld',
//            data:'',
//            dataType:'json',
//            success: function (data){
//                alert(data.d);
//            }        
//        });
        
            jQuery.ajax({ type: "POST",
                            url: './service/common.asmx/HelloWorld',
                            data: '',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: true,
                            //cache: false,
                            success: function (data) {
                                if (data.d == '0') {
                                alert(data.d);
//                                    success_div.hide();
//                                    error_div.hide().fadeIn("fast");
                                }
                                else {
                                alert(data.d);                                   
                                }
                            },
                            error: function (request, status, error) {
                                alert(request.responseText);
                            }
                        });
     }
     catch(Error)
     {
        alert(Error);
     }
     
}