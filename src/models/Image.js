class Image {
  constructor(image) {
    this.url = image.url
    this.title = image.title
    this.caption = image.caption
    Image.all.push(this)
  }
}
Image.all = []
