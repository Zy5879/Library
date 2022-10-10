let library = [];

// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)

    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// const main = document.querySelector('.main')
// const newBook = new Book(main)

class Book {
    constructor(title,author,page,read) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
    }
}

class Storage {
    static displayBooks() {
        const StoredBooks =  [
            {
                title: 'Bk',
                author: 'JK',
                page: 245,
                read: 'Read'
            },
            {
               title: 'Bk',
               author: 'JK',
               page: 245,
               read: 'Did Not Read'
            }
                
        ];

        const books = StoredBooks;
        books.forEach((book) => Storage.addBookToLibrary(book));
    }

    static addBookToLibrary(book) {
        const main = document.querySelector('.main');
        const card = document.createElement('div');
        card.classList.add('card')
        // const btn2 = document.createElement('button')
        // btn2.classList.add('btn2')

        card.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.page}</p>
            <button>${book.read}</button>
        `;

        // card.append(btn2)


        main.appendChild(card)

    }

}

document.addEventListener('DOMContentLoaded', Storage.displayBooks)

document.getElementById('btn').addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();

    const title = document.getElementById('inputValueBook').value;
    const writer = document.getElementById('inputValueAuthor').value;
    const pg = document.getElementById('inputPages').value;
    const readBtn = document.getElementById('read')

    const book = new Book(title,writer,pg,readBtn.checked);

    if(readBtn.checked === true) {
        book.read = 'Read'
    } else {
        book.read = 'Did Not Read'
    }

    Storage.addBookToLibrary(book)
})



// const btn = document.getElementById('btn').addEventListener('click', Storage.addBookToLibrary);


// Object Constructor

// function Book(book,author,page,read) {
//     this.book = book;
//     this.author = author;
//     this.page = page;
//     this.read = read;
// }

// pushes info from Book Constructor to library array

// function addBookToLibrary(book,author,page,read) {
//     let news = new Book(book, author, page,read)
//     library.push(news)
// }

// Display info that's pushed into array on page

// function displayBooks() {
    // const main = document.querySelector('.main');
    
    // const title = document.getElementById('inputValueBook').value;
    // const writer = document.getElementById('inputValueAuthor').value;
    // const pg = document.getElementById('inputPages').value;
    // const readBtn = document.getElementById('read')

    // const para = document.createElement('p');
    // const para1 = document.createElement('p');
    // const para2 = document.createElement('p');

//     // if checkbox is checked it returns Read in HTML BUTTON once submit is clicked

    // const btn2  = document.createElement('button');
    // btn2.classList.add('btn2');
    // if(readBtn.checked === true) {
    //     btn2.innerHTML = 'Read';
    //     btn2.value = 'Read'
    //     btn2.style.backgroundColor = '#39FF14'
    // } else {
    //     btn2.innerHTML = 'Did Not Read';
    //     btn2.value = 'Did Not Read';
    //     btn2.style.backgroundColor = '#FF3131'
    // }

//     // After submit allows toggle 

    // btn2.addEventListener('click', change)
    // function change() {
    //     if(btn2.value === 'Read') {
    //         btn2.value = 'Did Not Read';
    //         btn2.innerHTML = 'Did Not Read';
    //         btn2.style.backgroundColor = '#FF3131'
    //     } else {
    //         btn2.value = 'Read';
    //         btn2.innerHTML = 'Read';
    //         btn2.style.backgroundColor = '#39FF14'
    //     }
    // }


    // const card = document.createElement('div');
    // card.classList.add('card');
    // main.appendChild(card)

    // const removeBookButton = document.createElement('button')
    // removeBookButton.classList.add('remove-book-button');
    // removeBookButton.textContent = 'x';

    // card.appendChild(removeBookButton)

//     // Allows to delete a specific card in your library

    // removeBookButton.addEventListener('click', function(e) {
    //     this.parentNode.remove();
    //     let target = e.target;
    //     let itemIndex = 0;
    //     for(const item of library) {
    //         if(item.index === target.parentNode.index) {
    //             library.splice(item.index, 1);
    //             break;
    //         }
    //         itemIndex++;
    //     }
    // });
    

//     // value of your input gets pushed onto the page and into the array.

    // para.textContent = (`${title}`);
    // para1.textContent = (`${writer}`);
    // para2.textContent = (`${pg}`);
    // card.append(para, para1, para2, btn2);
    // addBookToLibrary(title, writer, pg, readBtn.checked);
    // closeModal(modal)
    // myForm.reset()
// }




// const btn = document.getElementById('btn').addEventListener('click', displayBooks);

// Prevents form from reloading once submit is clicked

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById('myForm').addEventListener('submit', function(e) {
//         e.preventDefault()
//     })
// })
