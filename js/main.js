// App is a class (denoted by it's uppercase name) definition that will later be instantiated in the document ready.
var App = function($){

    // Save reference to App object scope


    var _this = this;

    function _init(){

		var carousel = new Carousel('carousel1', $('.slide-wrapper'), $('#carouselNav'), 500, 5000);
		carousel.init();
        
    }

    // Application methods

    /* ************************************************************************** */
    /* At the end of App instantiation, call the init function of the App object. */
    /* ************************************************************************** */
    _init.call(this);
};

// Override the toString method for more productive error reporting.
App.prototype.toString = function(){
    return '[object App]';
};



// Instantiate application in $(document).ready()
$(function(jquery){
    window.app = new App(jquery);
});
