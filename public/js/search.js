const searchFormHandler = async (event) => { // Handle search form

    event.preventDefault();

    // Basically get input and redirect user
    let searchText = document.querySelector('#searchInput').value.trim();

    if(searchText == ""){
      searchText = "Easter Egg";
    }

    let redirectURL = '/searchpage/' + searchText;
    document.location.replace(redirectURL); // send to page 

};

document
  .querySelector('.searchForm')
  .addEventListener('submit', searchFormHandler);