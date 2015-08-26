<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && filter_var(isset($_POST['email']), FILTER_VALIDATE_EMAIL) ) {

		$first_name = strip_tags(trim($_POST['first_name']));
		$last_name = strip_tags(trim($_POST['last_name']));
		$email = strip_tags(trim($_POST['email']));

		$message = $first_name . ",\n\nThanks for requesting a demo! We’ll get back to you soon.";
		mail($email, 'Thanks for filling out that form.', $message);
	}
} 
else {
	http_response_code(500);
}
?>
