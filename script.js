$(document).ready(function() { 



function search() {
  console.log('search');

  $.ajax({
     url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $("#search").val(),
     dataType: "jsonp",
     type: "POST",
     headers: {
       "Api-User-Agent": "Example/1.0"
     },
     success: function(data) {


//console.log(data.query.search);
      var search = data.query.search;
      
      console.log(search, search.length);

      for (var i = 0; i < search.length; i++) {
        $('#results').append('<h3>' + search[i].title + '</h3><br/>' + '<p>' + search[i].snippet + '</p><br/>');
      }



       }
     });
   }


   $('#search').keypress(function(e){
     console.log(e);
     if(e.keyCode == 13){//Enter key pressed
      console.log('click');
      e.preventDefault();
      search();
     }
   });


  // $('#search').keypress(function(e){
  //       if(e.which == 13){//Enter key pressed
  //           search();
  //       $("#results").appendTo

}); 