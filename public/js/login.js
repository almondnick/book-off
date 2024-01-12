const loginFormHandler = async (event) => { // form to handle logins
    event.preventDefault();
  
    console.log("hello");

    // Get values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) { // make sure they exist
      const response = await fetch('/api/users/login', { // Send POST request to the api
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If we log in, send user to their dashboard
        console.log("sucess");

        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    };
}

const signupFormHandler = async (event) => { // form to handle people signing up
    event.preventDefault();

    // Get values
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) { // make sure they exist
      const response = await fetch('/api/users', { // Send out a POST request to the api
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If we log in, send user to their dashboard
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};
  
  document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signupForm')
    .addEventListener('submit', signupFormHandler);
  