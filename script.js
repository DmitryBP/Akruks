$(document).ready(function() {

	//E-mail Ajax Send
	$(".mane-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка отправлена, менеджер свяжется с Вами в ближайшее время!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});