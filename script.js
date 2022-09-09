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

function Book(book,author,page) {
    this.book = book;
    this.author = author;
    this.page = page;
}

function addBookToLibrary(book,author,page) {
    let news = new Book(book, author, page)
    library.push(news)
    // displayBooks()
}

function displayBooks() {
    const main = document.querySelector('.main');
    
    const title = document.getElementById('inputValueBook').value;
    const writer = document.getElementById('inputValueAuthor').value;
    const pg = document.getElementById('inputPages').value;
    // library.forEach(element => console.log(element))
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card)
    const para = document.createElement('p');
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')
    // para.textContent = (`${title} ${writer} ${pg}`);
    para.textContent = (`${title}`);
    para1.textContent = (`${writer}`);
    para2.textContent = (`${pg}`)
    card.append(para, para1, para2)
    addBookToLibrary(title, writer, pg)

}

// addBookToLibrary('Harry Potter', 'JK ROWLING', '256');
// addBookToLibrary('Harry Potter', 'JK ROWLING', '256');


const btn = document.getElementById('btn').addEventListener('click', displayBooks)