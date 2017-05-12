class ImagesView {
  static render(images) {
    const imageCards = images.map(function(image, i, images) {
      return `<div class="card">
      <div class="card-image">
      <img src="${image.url}">
      <span class="card-title">${image.title}</span>
      </div>
      <div class="card-content">
      <p>${image.caption}</p>
      </div>
      </div>`
    })
    $('#photo-list').html( imageCards.join('') )
  }
}
