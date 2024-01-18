// All the "You would really like these" books
const bookTitle1 = document.getElementById("bookLike1Title");
const bookAuth1 = document.getElementById("bookLike1Author");
const bookImg1 = document.getElementById("book1Image");

const bookTitle2 = document.getElementById("bookLike2Title");
const bookAuth2 = document.getElementById("bookLike2Author");
const bookImg2 = document.getElementById("book2Image");

const bookTitle3 = document.getElementById("bookLike3Title");
const bookAuth3 = document.getElementById("bookLike3Author");
const bookImg3 = document.getElementById("book3Image");

// All the "Popular Books"
const bookTitlePop1 = document.getElementById("bookPop1Title");
const bookAuthPop1 = document.getElementById("bookPop1Author");
const bookImgPop1 = document.getElementById("bookPop1Image");

const bookTitlePop2 = document.getElementById("bookPop2Title");
const bookAuthPop2 = document.getElementById("bookPop2Author");
const bookImgPop2 = document.getElementById("bookPop2Image");

const bookTitlePop3 = document.getElementById("bookPop3Title");
const bookAuthPop3 = document.getElementById("bookPop3Author");
const bookImgPop3 = document.getElementById("bookPop3Image");


function myFunction(bookTitleElement, bookAuthorElement, bookImgElement) {

    // Get my book title
    const bookTitle = bookTitleElement.innerHTML; // For now we get book title (maybe later isbn through a dataid or something....)

    // Now that we have book title, lets through an api request to get data
    fetch("https://openlibrary.org/search.json?q="+bookTitle)
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

                // Get cover and put into element
                bookImgElement.src="https://covers.openlibrary.org/b/id/"+bookData.docs[0].cover_i+"-L.jpg";
            
                // Get author and put into element
                bookAuthorElement.innerHTML = "By: " + bookData.docs[0].author_name[0];
            }
        })

    
}

// Like books
myFunction(bookTitle1, bookAuth1, bookImg1);
myFunction(bookTitle2, bookAuth2, bookImg2);
myFunction(bookTitle3, bookAuth3, bookImg3);

// Popular books
myFunction(bookTitlePop1, bookAuthPop1, bookImgPop1);
myFunction(bookTitlePop2, bookAuthPop2, bookImgPop2);
myFunction(bookTitlePop3, bookAuthPop3, bookImgPop3);
