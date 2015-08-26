window.onload = function() {

	var form = document.getElementById('my_form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		var first_name  = document.getElementById('input_firstname').value,
			last_name   = document.getElementById('input_lastname').value,
			email       = document.getElementById('input_email').value;
		var error_first = document.getElementById('firstname_error'),
			error_last  = document.getElementById('lastname_error'),
			error_email = document.getElementById('email_error');

		if (first_name && last_name && email) {

			if (is_valid_email(email)) {

				// clear any remaining email field error messages
				error_email.innerHTML = '';

				// construct data string for ajax post
				var data_string = 'first_name=' + first_name + '&last_name=' + last_name + '&email=' + email;
				
				// set up ajax request
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
							console.log('status: ' + xhr.status + ', response: '+ xhr.responseText);
							//window.location.href='thankyou.html';
						} else {
							console.log('status: ' + xhr.status + ', response: '+ xhr.responseText);
						}
					}
				};
				// make post
				xhr.open('post', 'email_user.php', true)
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(data_string);

			}	
		} 
		else {
			error_first.innerHTML = first_name == '' ? 'please enter first name' : '';
			error_last.innerHTML  = last_name  == '' ? 'please enter last name'  : '';
			error_email.innerHTML = email      == '' ? 'please enter a email'    : '';
		}


	});

	function is_valid_email(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	}
}
