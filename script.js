var getSearch = function () {
	var searchInput = $("#searchText").val();

	var matches = $(":contains(" + searchInput  + ")");

	console.log(matches.length);
	print(matches);
}
$(document).ready(function(){
	
})
