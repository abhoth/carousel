function Carousel(name,slider,sliderNav,animationSpeed, autoSpeed){

    this.name = name;
    this.slider = slider;
    this.sliderNav =  sliderNav;
    this.animationSpeed = animationSpeed;
    this.autoSpeed = autoSpeed;

    var _this = this;
    var sliderWidth,
        slideWidth,
        offSet,
        timer,
	    resizeTimeout;
		
    this.animateSlider = function(offSet){
        this.slider.animate({
            left: offSet + 'px'
        }, this.animationSpeed);
    }

    this.carouselSlide = function(trigger){
        offSet = (((trigger.attr('rel') * slideWidth)  - slideWidth) * -1);
        this.sliderNav.children().removeClass('on');
        trigger.addClass('on');
        this.animateSlider(offSet);
    }

    this.nextSlide = function(){

        offSet = this.slider.position().left - slideWidth;

        var nextButton = this.sliderNav.children('.on').next();
        this.sliderNav.children().removeClass('on');

        if (offSet > -sliderWidth ){
             nextButton.addClass('on');
        }
        else{
            offSet = 0;
            this.sliderNav.find('a:first').addClass('on');
        }

        this.animateSlider(offSet);
    }

    this.previousSlide = function(){

        offSet = this.slider.position().left + slideWidth;
        var prevButton = this.sliderNav.children('.on').prev();
        this.sliderNav.children().removeClass('on');

        if (offSet <  1 ){
            prevButton.addClass('on');
        }
        else {
            offSet = -(sliderWidth - slideWidth);
            this.sliderNav.find('a:last').addClass('on');
        }

        this.animateSlider(offSet);
    }
	
	this.time = function(){
		 timer = setInterval(function(){
				_this.nextSlide();
		  }, autoSpeed);
		
	}
	
	this.init = function(){
		
		    resizeTimeout = false;
		    offSet = 0;
		    sliderWidth = slider.width();
            slideWidth =  sliderWidth /  this.slider.children().length;
	        clearInterval(timer);
			
			this.sliderNav.children().removeClass('on');
            this.sliderNav.find('a:first').addClass('on');
	        this.slider.css('left',offSet + 'px');
			
			this.sliderNav.find('a').on('click', function(e){
				
				e.preventDefault;
				_this.carouselSlide($(this));
				clearInterval(timer);
				_this.time();
		     });
			 
			this.sliderNav.find('input:first').on('click', function(e){
				
				e.preventDefault;
				_this.previousSlide();
				clearInterval(timer);
				_this.time();
		     });
			
			this.sliderNav.find('input:last').on('click', function(e){
				
				e.preventDefault;
				_this.nextSlide();
				clearInterval(timer);
				_this.time();
				
		     });
			
			 $(window).smartresize(function(){
  				_this.init();
			   });
						
		    _this.time();
				
				
			
		
			
		
	}
}
