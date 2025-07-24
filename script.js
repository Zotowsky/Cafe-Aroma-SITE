// Инициализация карты
const map = L.map('map').setView([55.751244, 37.618423], 16);

// Добавление слоя OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавление маркера
const cafeIcon = L.icon({
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

L.marker([55.751244, 37.618423], {icon: cafeIcon})
  .addTo(map)
  .bindPopup("<b>Café Aroma</b><br>ул. Кофейная, 10")
  .openPopup();

// Добавление круга радиуса
L.circle([55.751244, 37.618423], {
  color: '#C39B77',
  fillColor: '#C39B77',
  fillOpacity: 0.2,
  radius: 200
}).addTo(map);

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Фильтрация меню (упрощенная версия)
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.category-btn.active').classList.remove('active');
    this.classList.add('active');
  });
});

// Обработчики для модального окна
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('authModal');
  const loginBtn = document.getElementById('loginBtn');
  const closeBtn = document.querySelector('.close');
  const registerBtn = document.getElementById('registerBtn');
  const forgotPassword = document.getElementById('forgotPassword');
  const loginForm = document.getElementById('loginForm');

  // Открытие модального окна
  loginBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Закрытие при клике вне окна
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Переключение на форму регистрации
  registerBtn.addEventListener('click', function() {
    alert('Функция регистрации будет доступна в ближайшее время!');
  });

  // Восстановление пароля
  forgotPassword.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Функция восстановления пароля будет доступна в ближайшее время!');
  });

  // Обработка формы входа
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Попытка входа:', email, password);
    
    alert('Добро пожаловать! В реальной версии здесь будет авторизация.');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    loginBtn.textContent = 'Мой профиль';
  });

  // Закрытие по Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});