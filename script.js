let library = [];

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

function Book(book,author,page,read) {
    this.book = book;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book,author,page,read) {
    let news = new Book(book, author, page,read)
    library.push(news)
    // displayBooks()
}

function displayBooks() {
    const main = document.querySelector('.main');
    
    const title = document.getElementById('inputValueBook').value;
    const writer = document.getElementById('inputValueAuthor').value;
    const pg = document.getElementById('inputPages').value;
    
    const readBtn = document.getElementById('read')

    const para = document.createElement('p');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    const btn2  = document.createElement('button');
    btn2.classList.add('btn2');
    if(readBtn.checked === true) {
        btn2.innerHTML = 'Read';
        btn2.value = 'Read'
    } else {
        btn2.innerHTML = 'Did Not Read';
        btn2.value = 'Did Not Read';
    }

    btn2.addEventListener('click', change)
    function change() {
        if(btn2.value === 'Read') {
            btn2.value = 'Did Not Read';
            btn2.innerHTML = 'Did Not Read';
        } else {
            btn2.value = 'Read';
            btn2.innerHTML = 'Read';
        }
    }

    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card)

    const removeBookButton = document.createElement('button')
    removeBookButton.classList.add('remove-book-button');
    removeBookButton.textContent = 'x';

    card.appendChild(removeBookButton)

    removeBookButton.addEventListener('click', function(e) {
        this.parentNode.remove();
        let target = e.target;
        let itemIndex = 0;
        for(const item of library) {
            if(item.index === target.parentNode.index) {
                library.splice(item.index, 1);
                break;
            }
            itemIndex++;
        }
    });
    


    para.textContent = (`${title}`);
    para1.textContent = (`${writer}`);
    para2.textContent = (`${pg}`);
    card.append(para, para1, para2, btn2);
    addBookToLibrary(title, writer, pg, readBtn.checked);
    closeModal(modal)

}



const btn = document.getElementById('btn').addEventListener('click', displayBooks);




    // library.forEach(element => console.log(element))
    
    // let index = 0; 
    // const card = document.createElement('div');
    // card.classList.add('card');
    // main.appendChild(card)

    // const removeBookButton = document.createElement('span')
    // removeBookButton.classList.add('remove-book-button');
    // removeBookButton.textContent = 'x'

    // removeBookButton.dataset.linkedArray = index;
    // index++;
    // card.appendChild(removeBookButton)

    // removeBookButton.addEventListener('click', removeBookFromLibrary);
    
    // function removeBookFromLibrary() {
    //     let retriveBookToRemove = removeBookButton.dataset.linkedArray;
    //     library.splice(parseInt(retriveBookToRemove), 1);
    //     card.remove()
    // }