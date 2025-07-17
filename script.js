document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // SweetAlert2 popup
  Swal.fire({
    title: 'Message Sent!',
    text: 'Thank you for contacting us. We will get back to you soon.',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  this.reset();
});
