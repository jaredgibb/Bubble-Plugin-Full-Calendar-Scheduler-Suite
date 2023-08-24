function(instance, properties) {
instance.canvas.append(`<img src="data:image/png;base64,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" alt=""  width="100%" height="${properties.bubble.height()}px" />`)

}