const searchResultList = document.getElementById("searchResultList"); // The list we'll append to
const searchThis = document.getElementById("searchText").innerHTML; // The text we want to search

function badLink(){
    alert("Sorry it's a bad link...");
}
function createList(){

    fetch("https://openlibrary.org/search.json?q="+searchThis)
    .then(function (response) {
        return response.json();
    })
    .then (function (bookSearchData) {
        if(bookSearchData.docs == null) { // means no books were found
            console.log("No books found?!");
        }
        else {
            console.log("BOOKS FOUND!");
            console.log(bookSearchData);

            let searchThisMany = 15;

            if(bookSearchData.docs.length < 15){ // used in case we have less than 15 results
                searchThisMany = bookSearchData.docs.length;
            }

            for(let i=0; i<searchThisMany; i++) { // just get the first 15 results if we have 15 (maybe implement a paginatin later...)

                /* HOW IT SHOULD BE DISPLAYED
                <a href="#">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-md-3">
                            <img src="book1_cover.jpg" alt="Book 1 Cover" class="img-fluid">
                            </div>
                            <div class="col-md-9">
                            <h4 class="mb-1">Title: Book Title</h4>
                            <hr>
                            <p class="mb-1">Author: Author Name</p>
                            <p class="mb-1">Year Published: 2023</p>
                            <p class="mb-1">Number of Pages: 250</p>
                            </div>
                        </div>
                    </li>
                </a>
                */

                // Create each element and append to the ul list (searchResultList)

                var li = document.createElement("li");
                li.classList.add("list-group-item");
                // append list to UL
                searchResultList.append(li);

                var linkCheck = bookSearchData.docs[i].isbn; // used check if "isbn" key actually exists
                if(typeof linkCheck == "undefined") { // if doesn't exist don't make link usable
                    //console.log("bad link");
                    var link = document.createElement("a");
                    link.href = "#";
                    link.onclick = function() { alert("Sorry it's a bad link..."); }; // prevents user from going anywhere
                    li.append(link);
                }
                else { // else we have link! so we can make review!
                    var link = document.createElement("a");
                    link.href = "/singlebook/" + bookSearchData.docs[i].isbn[0];
                    li.append(link);
                }

                //Create div
                var div1 = document.createElement("div");
                div1.classList.add("row");
                link.append(div1);

                // Another div
                var div2 = document.createElement("div");
                div2.classList.add("col-md-3");
                div1.append(div2);

                // Create image element
                var image = document.createElement("img");
                image.classList.add("img-fluid", "book-image");
                image.alt = "Book Picture";
                if(typeof bookSearchData.docs[i].cover_i == "undefined") {  // check if image exists
                    //console.log("no image");
                    image.src = "../images/noImageFound.jpg";

                }
                else { // if it exists, use it
                    image.src = "https://covers.openlibrary.org/b/id/"+bookSearchData.docs[i].cover_i+"-L.jpg";
                }
                div2.append(image);

                // Another div
                var div3 = document.createElement("div");
                div3.classList.add("col-md-9");
                div1.append(div3);

                // Get title, author, year published, page number then append all

                var title = document.createElement("h4");
                title.classList.add("mb-1");
                title.innerHTML = bookSearchData.docs[i].title;
                div3.append(title);

                var hr = document.createElement("hr");
                title.append(hr);

                var author = document.createElement("h5");
                author.classList.add("mb-1");
                author.innerHTML = "Author: " + bookSearchData.docs[i].author_name[0];
                div3.append(author);

                var publishYear = document.createElement("h5");
                publishYear.classList.add("mb-1");
                publishYear.innerHTML = "Year Published: " + bookSearchData.docs[i].first_publish_year;
                div3.append(publishYear);

                var pages = document.createElement("h5");
                pages.classList.add("mb-1");
                pages.innerHTML = "Number of Pages: " + bookSearchData.docs[i].number_of_pages_median;
                div3.append(pages);

            } // end for loop
        }
    })
}

createList(); // function that creates the search list












