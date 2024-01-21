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
                document.getElementById("bookPages").innerHTML = "Number of Pages: " + bookData.docs[0].number_of_pages_median
            }
        })
}



findBookData(isbn);
console.log(isbn);
