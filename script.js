const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')/*here we are adding image to the lightbox. without this line,
    the lightbox will be empty */
    img.src = image.src/*source of image in the light box will be equal to that of our current image
    selected */
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)/*the image should be removed too after zooming out 
      from the light box */
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {/*if we click anywhere outside the image in the light box, it
  will zoom out. */
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})