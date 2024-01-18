const loginFormHandler = async (event) => { // form to handle logins
    event.preventDefault();
  
    console.log("hello");

    // Get values
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
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
    const name = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

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
  