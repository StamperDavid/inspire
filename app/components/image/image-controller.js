import ImageService from "./image-service.js";

let _imageService = new ImageService()


function _drawImage() {
  let image = _imageService.Image
  let template = ''
  ImageService == image.Template
  document.getElementById('bg-image').innerHTML = image.Template
}


export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()
  }
  renderImages() {
    _drawImage();
  }

}
