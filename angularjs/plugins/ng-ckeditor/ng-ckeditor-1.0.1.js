/*
 * autor: Miller Augusto S. Martins
 * e-mail: miller.augusto@gmail.com
 * github: miamarti
 * */
(function(window, document) {
    "use strict";
    (angular.module('ng.ckeditor', [ 'ng' ])).directive('ngCkeditor', function() {
	var container = function(scope, element, attrs) {
	    element[0].innerHTML = '<div id="' + attrs.bind + '"></div> <div class="totalTypedCharacters"></div>';
	    var config = {
		removeButtons : (attrs.removeButtons != undefined) ? 'About,' + attrs.removeButtons : 'About'
	    };
	    if (attrs.removePlugins != undefined) {
		config.removePlugins = attrs.removePlugins;
	    }
	    if (attrs.skin != undefined) {
		config.skin = attrs.skin;
	    }
	    (CKEDITOR.appendTo(attrs.bind, config, scope[attrs.bind])).on('change', function(evt) {
		scope[attrs.bind] = evt.editor.getData();
		if (attrs.msnCount != undefined) {
		    element[0].querySelector('.totalTypedCharacters').innerHTML = attrs.msnCount + " " + evt.editor.getData().length;
		}
	    });
	};
	return {
	    restrict : 'E',
	    link : container
	};
    });
})(window, document);
