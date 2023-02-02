import navigations from "../data/navigations.js"

new Swiper(".main .swiper", {
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },
  spaceBetween: 0, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    // 페이지 번호 사용
    el: ".main .swiper-pagination", // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 제어 여부
  },
  navigation: {
    prevEl: ".main .swiper-button-prev", // 이전 버튼 요소
    nextEl: ".main .swiper-button-next", // 다음 버튼 요소
  }
});

const goUpEl = document.querySelector(".go-up");
goUpEl.addEventListener("click", function () {
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
});

// 푸터 내비게이션 맵 랜더링
const navigationsEl = document.querySelector('.best .navigations')
navigations.forEach(nav => {
  const mapEl = document.createElement('div')
  mapEl.classList.add('map')

  let mapList = ''
  /*
  nav.maps.forEach(map => {
    mapList += `<li>
      <a href="${map.url}">${map.name}</a>
    </li>`
  })
  */
  nav.maps.forEach(map => {
    mapList += /* html */ `<li>
      <a href="javascript:void(0)"><img src="${map.url}"></a>
    </li>`
  })

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
      <span class="icon"></span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `

  navigationsEl.append(mapEl)
})

// 푸터 내비게이션 맵 아코디언
const mapEls = [...document.querySelectorAll('.best .navigations .map')]
/*
mapEls.forEach(el => {
  const h3El = el.querySelector('h3')
  h3El.addEventListener('click', () => {
    el.classList.toggle('active')
  })
})
*/