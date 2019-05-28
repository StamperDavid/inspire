// @ts-ignore
const imgApi = axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/images',
    timeout: 3000
});

export default class ImageService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get image() {
        return _state.image.map(c => new Image(c))
    }
}