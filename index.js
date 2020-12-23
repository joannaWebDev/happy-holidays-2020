const openCard = () => {
  const button = document.getElementById('button');

  const img = new Image();
        img.src = "img/colorful-confetti.jpg";
        img.style.opacity = '0.5'
        document.body.background = img.src;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';

  const audio = new Audio ('audio/The Drifters - White Christmas.mp3')
  audio.play();
  
  if(button.innerHTML == 'Open Card') {
    button.innerHTML = 'Close Card';
  } else {
    button.innerHTML = 'Open Card';
  }
  
  const cards = document.querySelectorAll('.card');

  for(var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('open');
  }
}