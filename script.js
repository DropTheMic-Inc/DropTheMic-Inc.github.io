var getSearch = function () {
	var searchInput = $("#searchText").val();

	var matches = $(":contains(" + searchInput  + ")");

	console.log(matches.length);
	console.log(matches);
}
$(document).ready(function(){
	
})
