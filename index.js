// initialise emailjs
(function () {
    emailjs.init("jC5OZ9h4BTFc9-Mfe");
})();

function sendMail(event){
    event.preventDefault();
    
var params={
    name:document.getElementById("user_name").value ,
    to:document.getElementById("user_email").value ,
    subject:document.getElementById("user_subject").value ,
    message:document.getElementById("message").value,
};

var serviceID="service_nkrld9o";
var templateID="template_6o1niji";

emailjs.send(serviceID,templateID,params)
.then(() => {
    alert('SUCCESS!');
}, (error) => {
    alert('FAILED...', error);
});
}




