$("#submit-btn").on("click", function() {
	name = document.getElementsByName("name")[0].value;
	console.log(document.getElementsByName("message")[0].value);
    $.ajax({
        url: "https://formspree.io/f/xleqeqop",
        method: "POST",
        data: {name: name,subject: document.getElementsByName("subject")[0].value, email: document.getElementsByName("email")[0].value, message: document.getElementsByName("message")[0].value },
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});