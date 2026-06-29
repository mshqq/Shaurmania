function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function changeCategory(button) {
  document.querySelector('.menu__category.active').classList.remove('active');
  button.classList.add('active');

  let category = button.dataset.category;
  document.querySelectorAll('.menu__card').forEach(card => {
    card.style.display = category === 'all' || card.dataset.category === category ? '' : 'none';
  });
}

document.querySelectorAll('.menu__category').forEach(button => {
  button.addEventListener('click', () => {
    changeCategory(button);
  });
});

menuParent = document.querySelector('.menu__goodies');

let goodies = [
  {
    name: 'Шаурма деревенская',
    alt: 'Шаурма деревенская',
    img: 'img/menu/Шаурма деревенская.png',
    price: 329,
    category: 'shaurma'
  },
  {
    name: 'Шаурма с курицей и овощами',
    alt: 'Шаурма с курицей и овощами',
    img: 'img/menu/Шаурма с курицей и овощами .png',
    price: 325,
    category: 'shaurma'
  },
  {
    name: 'Шаурма овощная маленькая',
    alt: 'Шаурма овощная маленькая',
    img: 'img/menu/Шаурма овощная маленькая.png',
    price: 239,
    category: 'shaurma'
  },
  {
    name: 'Шаурма по-корейски маленькая',
    alt: 'Шаурма по-корейски маленькая',
    img: 'img/menu/Шаурма по-корейски маленькая.png',
    price: 329,
    category: 'shaurma'
  },
  {
    name: 'Буртуч',
    alt: 'Буртуч',
    img: 'img/menu/Буртуч.png',
    price: 399,
    category: 'shaurma'
  },
  {
    name: 'Кесадилья со свининой',
    alt: 'Кесадилья со свининой',
    img: 'img/menu/Кесадилья со свининой.png',
    price: 399,
    category: 'kesadilya'
  },
  {
    name: 'Картофель фри',
    alt: 'Картофель фри',
    img: 'img/menu/Картофель фри.png',
    price: 330,
    category: 'snacks'
  },
  {
    name: 'Наггетсы',
    alt: 'Наггетсы',
    img: 'img/menu/Наггетсы.png',
    price: 315,
    category: 'snacks'
  },
  {
    name: 'Сырные палочки',
    alt: 'Сырные палочки',
    img: 'img/menu/Сырные палочки.png',
    price: 315,
    category: 'snacks'
  }
];

goodies.forEach(product => {
  menuParent.innerHTML += `
  <div class="menu__card" data-category="${product.category}">
    <img src="${product.img}" alt="${product.alt}" class="menu__card-img" />
      <div class="menu__card-desc">
        <p class="menu__card-title">${product.name}</p>
        <p class="menu__card-price">${product.price} ₽</p>
      </div>
  </div>`;
});

let current = 0;
let slides = document.querySelectorAll('.slide');
let bubbles = document.querySelectorAll('.slider__bubble');

function goTo(index) {
  current = (index + slides.length) % slides.length;

  slides.forEach(s => s.classList.remove('active'));
  slides[current].classList.add('active');

  bubbles.forEach(b => b.classList.remove('active'));
  bubbles[current].classList.add('active');
}

document.querySelector('.slider__next').addEventListener('click', () => {
  goTo(current + 1);
});

document.querySelector('.slider__prev').addEventListener('click', () => {
  goTo(current - 1);
});

const autoplay = setInterval(() => {
  goTo(current + 1);
}, 3000);

const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let form = document.querySelector('.form-group');

document.querySelector('.form-button').addEventListener('click', () => {
  if (!validate()) return;

  form.innerHTML = '<p class="form-success">Вы подписались! Ждите горячих акций на почте 🔥</p>';
});

function validate() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === '') {
    showError(nameInput, 'Поле обязательно');
    return false;
  }

  if (emailValue === '' || !emailValue.includes('@')) {
    showError(emailInput, 'Введите корректный Email');
    return false;
  }

  clearError(nameInput);
  clearError(emailInput);
  return true;
}

function showError(input, message) {
  input.classList.add('error');

  const error = input.previousElementSibling; // элемент после input
  if (error) error.textContent = message;
}

function clearError(input) {
  input.classList.remove('error');

  const error = input.nextElementSibling;
  if (error) error.textContent = '';
}
