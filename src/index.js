import './style/main.styl'
import imageSource from './images/image.jpg'

console.log('Kikoo')

const $image = new Image()
$image.src = imageSource
document.body.appendChild($image)
