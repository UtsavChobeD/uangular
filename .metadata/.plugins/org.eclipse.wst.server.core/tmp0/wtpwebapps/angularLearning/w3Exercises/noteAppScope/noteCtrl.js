app.controller("noteCtrl", function($scope) {
	$scope.note= "";
	this.onSave = function($scope){
    	alert("Note Saved this");
    };
    $scope.onClear=function(){
    	this.note= "";
    };
//    this.getRemainingWords = function(){
//    	return this.wordCount = 100 - this.note.length;
//    };
    $scope.$watch("note", function(){
    	$scope.wordCount = 100 - $scope.note.length;
    })
});