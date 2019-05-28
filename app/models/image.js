export default class Image {
  constructor(data) {
    this._id = data._id
    this._img = data._img
  }
  get Template() {
    <div class="container">
      <img class="background-image" src="${https:////bcw-sandbox.herokuapp.com/api/images}" alt="image cap"></img>
    </div>
  }
}