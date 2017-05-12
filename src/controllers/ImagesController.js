class ImagesController {
  constructor() {
  }
  formSubmission() {
    const $url = $('input[name=image_url]')
    const $title = $('input[name=title]')
    const $caption = $('input[name=caption]')

    const url = $url.val()
    const title = $title.val()
    const caption = $caption.val()

    const image = new Image({
      url: url,
      title: title,
      caption: caption
    })
    $url.val('')
    $title.val('')
    $caption.val('')
  }
}
