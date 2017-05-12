$(document).ready(function(){
  // your code here!
  const controller = new ImagesController()
  $('#photo-form').on('submit.preventDefault', function(submit) {
    submit.preventDefault()
    controller.formSubmission()
    ImagesView.render(Image.all)
  })
})
