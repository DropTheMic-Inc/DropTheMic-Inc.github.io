var getSearch = function () {
	var searchInput = $("#searchText").val();

	var matches = $(":contains(" + searchInput  + ")");

	console.log(matches.length);
	console.log(matches);

	var juice = $('div').find(searchInput);
	console.log(juice);
}
$(document).ready(function(){
	
})
