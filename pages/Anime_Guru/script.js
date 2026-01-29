const videoCollection = {
  videos: [
    {
      id:1,
      title: 'Itadori',
      source: 'Jujutsu Kaisen',
      videoSrc: "/media/itadori_fight.webm",
      autoplay: true,
      loop: true,
    },
    {
      id: 2,
      title: 'Gojo',
      source: 'Jujutsu Kaisen',
      videoSrc: "#",
      autoplay: true,
      loop: true,
    },
    {
      id: 3,
      title: 'Elric Brothers',
      source: 'Full Metal Alchemist',
      videoSrc: "#",
      autoplay: true,
      loop: true,
    },
  ],
  videoThumbnail: [
    {
      id: 1,
      title: 'Itadori',
      source: 'Jujutsu Kaisen',
      imgSrc: "/media/yuji.jpg",
    },
    {
      id: 2,
      title: 'Gojo',
      source: 'Jujutsu Kaisen',
      imgSrc: "#",
    },
    {
      id: 3,
      title: 'Elric Brothers',
      source: 'Full Metal Alchemist',
      imgSrc: "#",
    },
  ]
};

const playItadori = () => {
  const itadoriImgClick = document.getElementById('itadori_img');
  const itadoriVid = document.getElementById('itadori_vid');
  itadoriImgClick.addEventListener('click', () => {
    itadoriImgClick.style.display = "none";
    itadoriVid.style.display = 'block';
    itadoriVid.play();
  })
} 
const playFma = () => {
  const fmaImgClick = document.getElementById('fma_img');
  const fmaVid = document.getElementById('fma_vid');
  fmaImgClick.addEventListener('click', () => {
    fmaImgClick.style.display = "none";
    fmaVid.style.display = 'block';
    fmaVid.play();
  })
} 
const playRicky = () => {
  const rickyImg = document.getElementById('ricky_img');
  const rickyVideo = document.getElementById('ricky_vid');
  const loopDuration = 10;
  rickyImg.addEventListener('click', () => {
    rickyImg.style.display = 'none';
    rickyVideo.style.display = 'block';
    rickyVideo.play();
  });
}

playItadori();
playFma();
playRicky();


const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carousel = document.querySelector('.carousel');
const listItem = document.querySelector('.carousel .list');
const thumbnail = document.querySelector('.carousel .thumbnail');

nextBtn.onclick = () => {
  showSlider('next');
}
prevBtn.onclick = () => {
  showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
const showSlider = (type) => {
  const itemSlider = document.querySelectorAll('.carousel .list .item');
  const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
// when you use an appendChild method on an existing item - its function just moves its position
  if (type == 'next') {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add('next');
  }
  else {
    let positionLastItem = itemSlider.length - 1;
    listItem.prepend(itemSlider[positionLastItem]);
    thumbnail.prepend(itemThumbnail[positionLastItem]);
    carousel.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning)

  clearTimeout(runAutoRun);
}