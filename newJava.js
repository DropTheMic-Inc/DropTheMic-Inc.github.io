// //$('button').click(function() {
// 	//var toAdd = $("input[name=message]").val();
//    // $('#messages').append("<p>"+toAdd+"</p>");
// });

// function makeAjaxCall (){
// 	$.ajax({
// 		url:"http://347e6913.ngrok.com/test"
// 	})
// 	.done(function (data) {
// 		alert(data.message);

// 	})
// 	.error(function (error) {
// 		alert(error.message);
// 	});
// }

function makeAjaxCall() {
	var data = $("#dataToSubmit").val();
	$.ajax({
		url: "http://347e6913.ngrok.com/test",
		method: "POST",
		dataType: "JSON",
		data: { message: data }
	})
	.done(function (data){
		alert(data.message);
	})
	.error(function(error){
		alert(error.message);
	});
}
