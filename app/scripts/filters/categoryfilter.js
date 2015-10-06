/*
Filter to 
 	detect the change of category type
    	on click action over the category tabs
    		to SHOW TYPE RELATED ITEMS
*/
sesameFilters.filter('category', function() {
  return function(collection, type) {
  	var _collection = [];


  	if(collection != undefined){

  		if(type != "all"){
  			angular.forEach(collection, function(item){
	  			for(var j=0, len=item.category.length; j< len; j++){
	  				if(item.category[j].cat_name == type){
	  					_collection.push(item);
	  					break;
	  				}
	  			};
	  		});
  		}else{
  			_collection = collection;
  		}
  		
  	}
	
	return _collection;
  };
});