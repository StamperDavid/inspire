import ImageService from "./image-service.js";

//Private
const _is = new ImageService()
// var _imageService = new ImageService()


function drawImage() {
  document.getElementById('bg-image').style.backgroundImage = `url(${_is.image.large_url})`;
}


//Public
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
  }
}

