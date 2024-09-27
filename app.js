    document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
       e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      console.log('Form submitted:', { name, email, message });
       contactForm.reset();
         // Show a success message
       alert('Obrigado pela sua mensagem. Entraremos em contato em breve!');
     });
 });
