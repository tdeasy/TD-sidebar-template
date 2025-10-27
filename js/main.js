// theme hooks / simple console banner
console.log('%c Tim Deasy — Ableton Aesthetic Starter ', 'background: #00FFFF; color: #000; padding:4px 8px; font-weight:700;');

/* simple form validation */
const form = document.querySelector('form[action^="https://formspree.io"]');
if(form){
  form.addEventListener('submit', (e)=>{
    const name = form.querySelector('input[name="name"]')?.value.trim();
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const msg = form.querySelector('textarea[name="message"]')?.value.trim();
    if(!name || !email || !msg){
      e.preventDefault();
      alert('Please complete all fields before sending.');
    }
  });
}
