// All the "You would really like these" books
const book1ISBN= document.getElementById("book1ISBN");
const bookTitle1 = document.getElementById("bookLike1Title");
const bookAuth1 = document.getElementById("bookLike1Author");
const bookImg1 = document.getElementById("book1Image");

const book2ISBN= document.getElementById("book2ISBN");
const bookTitle2 = document.getElementById("bookLike2Title");
const bookAuth2 = document.getElementById("bookLike2Author");
const bookImg2 = document.getElementById("book2Image");

const book3ISBN= document.getElementById("book3ISBN");
const bookTitle3 = document.getElementById("bookLike3Title");
const bookAuth3 = document.getElementById("bookLike3Author");
const bookImg3 = document.getElementById("book3Image");

// All the "Popular Books"
const bookPop1ISBN= document.getElementById("bookPop1ISBN");
const bookTitlePop1 = document.getElementById("bookPop1Title");
const bookAuthPop1 = document.getElementById("bookPop1Author");
const bookImgPop1 = document.getElementById("bookPop1Image");

const bookPop2ISBN= document.getElementById("bookPop2ISBN");
const bookTitlePop2 = document.getElementById("bookPop2Title");
const bookAuthPop2 = document.getElementById("bookPop2Author");
const bookImgPop2 = document.getElementById("bookPop2Image");

const bookPop3ISBN= document.getElementById("bookPop3ISBN");
const bookTitlePop3 = document.getElementById("bookPop3Title");
const bookAuthPop3 = document.getElementById("bookPop3Author");
const bookImgPop3 = document.getElementById("bookPop3Image");


function myFunction(bookISBN, bookTitleElement, bookAuthorElement, bookImgElement) {

    // Get the unique book ISBN
    const ISBN = bookISBN.getAttribute("dataId");

    // Now that we have book ISBN, lets through an api request to get data
    fetch("https://openlibrary.org/search.json?q="+ISBN)
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

                bookTitleElement.innerHTML = bookData.docs[0].title; 
                // Get cover and put into element
                bookImgElement.src="https://covers.openlibrary.org/b/id/"+bookData.docs[0].cover_i+"-L.jpg";
            
                // Get author and put into element
                bookAuthorElement.innerHTML = "By: " + bookData.docs[0].author_name[0];
            }
        })

    
}

// Like books
myFunction(book1ISBN, bookTitle1, bookAuth1, bookImg1);
myFunction(book2ISBN, bookTitle2, bookAuth2, bookImg2);
myFunction(book3ISBN, bookTitle3, bookAuth3, bookImg3);

// Popular books
myFunction(bookPop1ISBN, bookTitlePop1, bookAuthPop1, bookImgPop1);
myFunction(bookPop2ISBN, bookTitlePop2, bookAuthPop2, bookImgPop2);
myFunction(bookPop3ISBN, bookTitlePop3, bookAuthPop3, bookImgPop3);
