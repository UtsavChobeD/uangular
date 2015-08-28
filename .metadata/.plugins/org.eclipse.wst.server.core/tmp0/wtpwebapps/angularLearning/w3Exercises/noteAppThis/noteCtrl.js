app.controller("noteCtrl", function() {
    this.note= "";
    this.onSave = function($scope){
    	alert("Note Saved this");
    };
    this.onClear=function(){
    	this.note= "";
    };
    this.getRemainingWords = function(){
    	return this.wordCount = 100 - this.note.length;
    };
//    $scope.$watch(noteCtrl.note, function(){
//    	
//    })
});