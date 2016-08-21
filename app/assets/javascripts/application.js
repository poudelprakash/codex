// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require turbolinks
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require angular
//= require angular-rails-templates
//= require ace-rails-ap
//= require ui-ace

// Themes
//= require ace/theme-monokai
//= require ace/ext-modelist
//= require ace/mode-html
//= require ace/mode-css
//= require ace/mode-ruby
//= require ace/mode-javascript

//= require_self

//= require_tree ./angular/controllers
//= require_tree ./angular/services
//= require_tree ./angular/templates

window.codex = angular.module('Codex', ['ui.ace', 'templates']);

$(document).ready(function() {
    var windowHeight = $(window).innerHeight();
    $('#language-exercise .tab-content').css('max-height', windowHeight - 180);

    $('#exerciseSpecsTab a').tab('show');
    $('#exerciseEditorTab a').tab('show');

});


$(window).on('resize', function(){
    windowHeight = $(window).innerHeight();
    $('#language-exercise .tab-content').css('max-height', windowHeight - 180);
});
