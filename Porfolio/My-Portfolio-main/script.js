var typed = new Typed(".typing",{
    strings:["","Digital Marketer","Data Analyst","Lunas Volunteer","Scholar"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
})


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Uncomment if you want to prevent default behavior
        // event.preventDefault(); 
        
        // Ensure the link navigates to the correct URL
        window.open(this.href, '_blank');
    });
});
