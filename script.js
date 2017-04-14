$(document).ready(function() {


//function to search through wikipedia API
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


      let search = data.query.search;

      console.log(search);


//This iterates through results and appends them to results div in html
 search.map(function(x){
   $('#results').append('<h3>' + x.title + '</h3><br/>' + '<p>' + x.snippet + '</p><br/><hr>');
  $("#results").css('font-family: Rubik, sans-serif');

 });




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




});
