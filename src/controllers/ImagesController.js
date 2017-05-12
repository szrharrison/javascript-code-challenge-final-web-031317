class ImagesController {
  formSubmission() {
    const url = $('input[name=image_url]').val()
    const caption = $('input[name=caption]').val()
    const image = new Image({
      url: url,
      caption: caption
    })
  }
}
