var getSearch = function () {
	var searchInput = $("#searchText").val();

	var matches = $(":contains(" + searchInput  + ")");

	//console.log(matches.length);//
	//console.log(matches);//

	var juice = $('div p').find(searchInput);
	console.log(juice);
	console.log(juice.length);
}
$(document).ready(function(){
	
})
