document.addEventListener("turbolinks:load", function() {

  var instrumentImage = document.querySelector('.job-avatar');

  function handleFileSelect(evt) {
    var files = evt.target.attchments; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = attchments[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="avatar-preview-thumb border-light" style="height: 60px; width: 60px; border-radius: 70%;" src="', e.target.result,
            '" title="', escape(theFile.name), '"/>'
          ].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  if (instrumentImage) {
    this.addEventListener('change', handleFileSelect, false);
  }

});
