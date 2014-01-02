// JavaScript Document
$(document).ready(function() {
	var like = $("#like-button").button({ 
		icons: { primary: "ui-icon-circle-arrow-n"}
		});
		
	var dislike = $("#dislike-button").button({ 
		icons: { primary: "ui-icon-circle-arrow-s"}
		});
		
	$("#like-button", "#dislike-button").button({
		text: !!$( this ).attr( "title" ),
		});
		
		like.click(function() {
        	notify( like );
		});
		
		dislike.click(function() {
        	notify( dislike );
		});
	
	$("#back-button").button({ 
		icons: { primary: "ui-icon-seek-prev"}
		});
		
	$("#next-button").button({ 
		icons: { primary: "ui-icon-seek-next"}
		});
	
	$("#playstop-button").button({ 
		icons: { primary: "ui-icon-play"}
		});	  
  });
  

function notify( input ) {
      var msg = "Thank you, you have selected " + $.trim( input.data( "tooltip-title" ) || input.text() );
      $( "<div>" )
        .appendTo( document.body )
        .text( msg )
        .addClass( "notification ui-state-default ui-corner-bottom" )
        .position({
          my: "center top",
          at: "center top",
          of: window
        })
        .show({
          effect: "blind"
        })
        .delay( 1000 )
        .hide({
          effect: "blind",
          duration: "slow"
        }, function() {
          $( this ).remove();
        });
    }