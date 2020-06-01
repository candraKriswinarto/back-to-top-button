const btnToTop = document.querySelector('.btnToTop');

// 1. window.scrollTo()
// btnToTop.addEventListener('click', () => {
//   window.scrollTo(0, 0);
// })

// 2. window.scroll()
// btnToTop.addEventListener('click', () => {
//   window.scroll({
//     top: 0,
//     behavior: 'smooth'
//   })
// })

// 3. document.documentElement.scrollTop()
// btnToTop.addEventListener('click', () => {
//   document.documentElement.scrollTop = 0;
// })

// 4. document.documentElement.scrollIntoView()
btnToTop.addEventListener('click', () => {
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  })
})