function sendMail(contactForm) {
    emailjs.send("gmail", "bastiaan", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
     function (response) {
       console.log("SUCCESS", response);
       alert("Sent!");
     },
     function (error) {
       console.log("FAILED", error);
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(error));
     });
    
    return false;  // To block from loading a new page
}