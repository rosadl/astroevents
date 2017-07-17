console.log("entrando");
//
// function dayImage(id) {
//   $.ajax({
//     url: "https://api.nasa.gov/planetary/apod?api_key=A2WsxudHGixiEWIX6tMDmCKa0SiyIUN9NENLN0WK",
//     success: function (response) {
//       $("#image").append("hola");
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// }
//
// dayImage();

$(document).ready( () => {
console.log("entrando2");
  /* Pokemon data object */
  class Nasa{
    constructor(explanation, name, image){
      this.explanation = explanation;
      this.name = name;
      this.image = image;
    }
  }

  /* add pokemon to DOM */

  const addImage = (image) => {
    const img = $('<img>').attr('src', image.image);
    const name = $('<span>').append(`#${image.explanation} - ${image.name}`);
    const picture = $('<div>').addClass('nasa').append(img).append(name);
    $("#dayImage").append(picture);
  };

  /* Return a promise to request a pokemon with an ID */

  function requestImagePromise(imgID){
    return $.ajax({
      url: "https://api.nasa.gov/planetary/apod?api_key=A2WsxudHGixiEWIX6tMDmCKa0SiyIUN9NENLN0WK",
      dataType:'json',
    }).then(data => {
      let p = new Nasa(imgID,data.name);
      console.log(`We have ${imgID} - ${p.name}`);
      return p;
    }).catch( e  => console.log(e));
  }
  });

  requestImagePromise(imgID);
