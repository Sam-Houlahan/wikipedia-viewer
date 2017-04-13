



function search() {

  $.ajax({
     url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $("#search").val(),
     dataType: "jsonp",
     type: "POST",
     headers: {
       "Api-User-Agent": "Example/1.0"
     },
     success: function(data) {


console.log(data);



       }
     });
   }


   $('#search').keypress(function(e){
     console.log(e);
     if(e.keyCode == 13){//Enter key pressed
       search();
     }
   });


  // $('#search').keypress(function(e){
  //       if(e.which == 13){//Enter key pressed
  //           search();
  //       $("#results").appendTo
