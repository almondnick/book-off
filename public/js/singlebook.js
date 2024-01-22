const isbn = document.getElementById("isbn").innerHTML; // get that isbn number

function findBookData(bookIsbn){

    fetch("https://openlibrary.org/search.json?q="+bookIsbn)
        .then(function (response) {
            return response.json();
        })
        .then (function (bookData) {
            if(bookData.docs == null) { // means no books were found
                console.log("No books found?!");
            }
            else {
                //console.log(bookData);
                console.log("BOOKS FOUND!");

                document.getElementById("bookTitle").innerHTML = bookData.docs[0].title; 
                
                // Get cover and put into element
                if(typeof bookData.docs[0].cover_i == "undefined") {  // check if image exists
                    //console.log("no image");
                    document.getElementById("bookPic").src = "../images/noImageFound.jpg";

                }
                else { // if it exists, use it
                    document.getElementById("bookPic").src="https://covers.openlibrary.org/b/id/"+bookData.docs[0].cover_i+"-L.jpg";
                }
            
                // Get author and put into element
                document.getElementById("bookAuthor").innerHTML = "By: " + bookData.docs[0].author_name[0];
            
                // Get number of pages and put into element
                document.getElementById("bookPublishDate").innerHTML = "Year Published:  " + bookData.docs[0].first_publish_year

                // Get Year Published and put into element
                if(typeof bookData.docs[0].number_of_pages_median == "undefined") {  // check if image exists
                    //console.log("no image");
                    document.getElementById("bookPages").innerHTML = "Number of Pages: Unavailable";
                }
                else { // if it exists, use it
                    document.getElementById("bookPages").innerHTML = "Number of Pages: " + bookData.docs[0].number_of_pages_median
                }

                let descriptionURL = "https://openlibrary.org" + bookData.docs[0].key + ".json";
                console.log(descriptionURL);

                //Now send out another fetch request for the description
                fetch(descriptionURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then (function (descData) {
                        
                        if(descData == null) { // means no books were found
                            console.log("No description found?!");
                        }
                        else {
                            if(descData.description){ // see if description actually exists
                                if(typeof descData.description.value == "undefined") {  // check if it exists
                                    document.getElementById("bookDescription").innerHTML = descData.description; // some api values are defined like this
                                }
                                else {
                                    document.getElementById("bookDescription").innerHTML = descData.description.value; // others are defined like this
                                }
                            }
                            else{
                                console.log("No description found?!");
                            }
                        }
                    });
            } // end else
        })
}



findBookData(isbn);
console.log(isbn);
