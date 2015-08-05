var getSearch = function () {       
 
	var searchInput = $("#searchText").val();

	$(".searchable:contains(" + searchInput  + ")").css("background-color", "yellow");
};

var clearSearch = function () {
    $(".searchable").css("background-color", "black");
};//

var url = "http://yeahpoetry.azurewebsites.net/";

function submitEmail () {
	var email = $("#emailInput").val();
	var name = $("#nameInput").val();
	if(name && isValidEmailAddress(email)) {
		$.ajax({
		type: "POST",
		url: url + "join",
		data: { 
			name: name,
			email: email 
		},
		success: function (data) {
			alert("Success");
		},
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
		$("#nameInput").val("");
	} else {
		alert("That's not a valid email address!")
	}
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(emailAddress);
};





