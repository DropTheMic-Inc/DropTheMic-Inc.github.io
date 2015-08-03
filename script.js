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



