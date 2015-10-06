/*
Filter to 
  remove the duplicate values 
    from the category list
      for UNIQUE TAB CREATION
*/
sesameFilters.filter('unique', function() {
   return function(collection) {
      var output = [];

      angular.forEach(collection, function(item) {
        if(output.indexOf(item) === -1) {
          output.push(item);
        }
      });
      return output;
   };
});