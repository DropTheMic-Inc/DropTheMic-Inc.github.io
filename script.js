var getSearch = function () {        
        
    clearSearch();

	var searchInput = $("#searchText").val();

	$(".searchable:contains(" + searchInput  + ")").css("background-color", "yellow");
};

var clearSearch = function () {
    $(".searchable").css("background-color", "black");
};
