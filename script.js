var getSearch = function () {
	var searchInput = $("#searchText").val();

	var matches = $(":contains(" + searchInput  + ")");

    for (var i = 0; i < matches.length; i += 1) {
        var match = matches[i];
        console.log(match);
    }
}
$(document).ready(function(){
	
})
