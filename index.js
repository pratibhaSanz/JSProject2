console.log("this is harry library");

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

//  add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui");
    tableBody = document.getElementById('tableBody');
                    let uiString =` <tr>
                                        
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;

    tableBody.innerHTML += uiString;

 }
// implement the clear funtion
Display.prototype.clear = function () {
    let librarayForm = document.getElementById('libraryForm');
    librarayForm.reset();
}

// implement the validate function
Display.prototype.validate = function (book) {
    if(book.name.length <2 || book.author.length <2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function (type , displayMsg){
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messgae:</strong> ${displayMsg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

  setTimeout(function(){
      msg.innerHTML ='';

  }, 2000);
}



// add submit event listener to librarayForm
let librarayForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("ur form is submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programmming = document.getElementById('programmming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programmming.checked) {
        type = programmming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){

        display.add(book);
        display.clear();
        display.show('success', ' your book is suceefully added');
    }
    else{
        display.show('danger' , 'Sorry u cant not add to this book');
    }
    e.preventDefault();
}
