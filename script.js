const password = document.getElementById('togglepassword');
const input =  document.getElementById('password');

password.addEventListener('click', () => {
    const type = input.getAttribute('type') === 'password'  ? 'text' : 'password';
 input.setAttribute('type', type);
 password.textContent = type  === 'password' ? 'Show' : 'Hide';

})
