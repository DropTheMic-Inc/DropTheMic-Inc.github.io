var comments = function(){
$('button').click(function() {
var toAdd = $("input[name=message]").val();
     $('#messages').append("<p>"+toAdd+"</p>");
 });
}

