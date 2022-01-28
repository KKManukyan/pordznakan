const reader = new FileReader()
reader.addEventListener("load", (e) => {
  img.src = e.target.result
})

inputReader.addEventListener("change", (e) => {
    reader.readAsDataURL(e.target.files[0])
});
