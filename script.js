// Функція для зміни кольорів фону та тексту
const n = 22;

function changeColorsBI() {
    const elementId = `element-${(n % 10) + 1}`;
    const element = document.getElementById(elementId);
  
    if (element) {
      // Отримуємо поточний колір фону та тексту
      const currentBackgroundColor = getComputedStyle(element).backgroundColor;
      const currentTextColor = getComputedStyle(element).color;
  
      // Перевіряємо, чи кольори вже змінені
      if (
        currentBackgroundColor !== 'rgb(255, 0, 0)' && // Перевірка на червоний фон
        currentTextColor !== 'rgb(255, 255, 255)' // Перевірка на білий текст
      ) {
        // Змінюємо колір фону та тексту
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
      } else {
        // Повертаємо оригінальні кольори
        element.style.backgroundColor = '';
        element.style.color = '';
      }
    }
  }
  function changeColorsNext() {
    const nextElementId = `element-${(n % 10) + 2}`;
    const nextElement = document.querySelector(`#${nextElementId}`);
  
    if (nextElement) {
      // Отримуємо поточний колір фону та тексту
      const currentBackgroundColor = getComputedStyle(nextElement).backgroundColor;
      const currentTextColor = getComputedStyle(nextElement).color;
  
      // Перевіряємо, чи кольори вже змінені
      if (
        currentBackgroundColor !== 'rgb(255, 0, 0)' && // Перевірка на червоний фон
        currentTextColor !== 'rgb(255, 255, 255)' // Перевірка на білий текст
      ) {
        // Змінюємо колір фону та тексту
        nextElement.style.backgroundColor = 'green';
        nextElement.style.color = 'white';
      } else {
        // Повертаємо оригінальні кольори
        nextElement.style.backgroundColor = '';
        nextElement.style.color = '';
      }
    }
  }
  
  // Додаємо обробник подій для сторінки
  document.addEventListener('click', (event) => {
    const target = event.target;
  
    // Перевіряємо, чи клік відбувся на елементі сторінки
    if (target.matches('h2, p, ul, ol, a, li') &&  target.id == `element-${(n % 10) + 1}`) {
      changeColorsBI();
    }else if (target.matches('h2, p, ul, ol, a, li') && target.id === `element-${(n % 10) + 2}`) {
        changeColorsNext();
      }
    
  });
  

  function addImage() {
    const imageContainer = document.getElementById('image-container');
    const newImage = document.createElement('img');
    newImage.id = 'img';
    newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/1280px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%99_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%9A%D1%82.jpg'; // Replace 'URL_OF_NEW_IMAGE' with the URL of the new image
    imageContainer.appendChild(newImage);
}

function increaseImageSize() {
  const image = document.getElementById('img');
  const currentWidth = parseInt(getComputedStyle(image).width);
  const currentHeight = parseInt(getComputedStyle(image).height);
  image.style.width = (currentWidth * 1.2) + 'px';
  image.style.height = (currentHeight * 1.2) + 'px';
}

function decreaseImageSize() {
  const image = document.getElementById('img');
  const currentWidth = parseInt(getComputedStyle(image).width);
  const currentHeight = parseInt(getComputedStyle(image).height);
  image.style.width = (currentWidth / 1.2) + 'px';
  image.style.height = (currentHeight / 1.2) + 'px';
}

function deleteImage() {
  const image = document.getElementById('img');
  if (image) {
      const imageContainer = document.getElementById('image-container');
      imageContainer.removeChild(image);
  }
}
