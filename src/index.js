$(document).ready(function(){
  // your code here!
  let controller = new ImagesController()
  $('#photo-form').on('submit.preventDefault', function(submit) {
    submit.preventDefault()
    console.log( controller.formSubmission() )
    ImagesView.render(Image.all)
  })
})
