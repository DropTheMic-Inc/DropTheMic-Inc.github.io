var getSearch = function () {       
 
	var searchInput = $("#searchText").val();

	$(".searchable:contains(" + searchInput  + ")").css("background-color", "yellow");
};

var clearSearch = function () {
    $(".searchable").css("background-color", "black");
};//
function submitEmail () {
	var email = $("#emailInput").val();
	$.ajax({
		type: "POST",
		url: "http://localhost:3000/join",
		data: { email: email },
		success: function (data) {console.log(data); alert("Success")}
	})
}
var url = "http://yeahpoetry.azurewebsites.net/join";

function submitEmail () {
	var email = $("#emailInput").val();
	if(isValidEmailAddress(email)) {
		$.ajax({
		type: "POST",
		url: url,
		data: { email: email },
		success: function (data) {console.log(data); alert("Success");},
		error: function (error) {
			var code = error.status;
			switch (code) {
				case 500:
					alert("Something went wrong!");
					break;
				case 400:
					alert("Bad email address!");
					break;
				case 409:
					alert("Email already on the list!");
					break;
				default:
					break;
				}
			}
		});

		$("#emailInput").val("");
	} else {
		alert("That's not a valid email address!")
	}
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(emailAddress);
};





