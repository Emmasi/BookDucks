const coverPicture = (x) => {
  if (x.attributes.Picture) {
    return "http://localhost:1337" + x.attributes.Picture.data.attributes.url;
  } else {
    console.log("Ingen Bild på mina bilder");
  }
};