$(function() {

	'use strict';
    // Init application
    var app = {
        init: function() {
            app.modules();
        },
        modules: function() {
            jqSlider.init();
            jsSlider.init();
        }

    };

    // jQuery Plugin Slider
    var jqSlider = {
        init: function() {
            $('.jq-label').click(function(e) {
                e.preventDefault();
                var
                    $this = $(this),
                    value = $this.data('value');
                $('#jqSlider').simpleSlider('setValue', value);
            });
        }
    };

    // Vanilla JS Slide
    var jsSlider = {
        init: function() {
            var
                rangeSlider = document.querySelector('#jsSlider'),
                rangeLabel = document.querySelectorAll('.js-label');

            for (var i = 0; i < rangeLabel.length; i++) {
                rangeLabel[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    rangeSlider.value = this.getAttribute('data-value');
                });
            }
        }
    };
    app.init();
});
