const reviewFormHandler = async (event) => { // handles form to post a review
    event.preventDefault();
  
    // Get information
    const thoughts = document.querySelector('#userThoughts').value.trim();

    let star_review = 0;

    if ($("input[type=radio]:checked").length > 0){ // if user doesn't choose any stars, we need to check b/c can't read null
        star_review = document.querySelector('input[name="rating"]:checked').value;
    }

    let book_isbn = isbn; // we got isbn from other javascript file
    
    if (thoughts || star_review) { // if these exists
      const response = await fetch(`/api/reviews`, { // Sent out POST request
        method: 'POST',
        body: JSON.stringify({ thoughts, star_review, book_isbn }), // These variable reflect the model names
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        let redirectURL = '/singlebook/' + book_isbn; 
        document.location.replace(redirectURL); // send back to main single book page
      } else {
        alert('Please fill out review information!');
      }
    }

};

document
  .querySelector('.reviewForm')
  .addEventListener('submit', reviewFormHandler);