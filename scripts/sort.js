$(document).ready(function(){
    
    $(function(){
 
         var $container = $('#works');

         $container.isotope({
            itemSelector : '.col',
             
         });


         var $optionSets = $('.option-set'),
         $optionLinks = $optionSets.find('a');

         $optionLinks.click(function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('active') ) {
                return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.active').removeClass('active');
            $this.addClass('active');

             // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-filter');
             // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof                changeLayoutMode === 'function' ) {
             // changes in layout modes need extra logic
                changeLayoutMode( $this, options )
            } else {
             // otherwise, apply new options
                $container.isotope( options );
            }

             return false;
         });
 
 
    });
    
});