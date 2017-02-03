
	$( '.mainContainer a' ).on( 'click', function( event ) {
		event.preventDefault();

		var currentUrl = window.location.href;
		var url = this.href; // event.target.href --> NO porque apunta al trash-icon

		var type = '';

		if ( $( this ).hasClass( 'done' ) || $( this ).hasClass( 'completeAll' ) ) {
			type = 'put'
		} else {
			type = 'delete'
		}

		$.ajax({
			url: url,
			type: type
		})
		.done( function( data ) {
			console.log( data );
			window.location = currentUrl;
		})
	});

	$( 'input' ).focus();
