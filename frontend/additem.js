const addBokBtn = async () => {
  let Title = document.querySelector("#inputName").value;
  let Author = document.querySelector("#inputAuthor").value;
  let Pages = document.querySelector("#inputnum").value;
  let Grades = document.querySelector("#inputgrades").value;
  let Type = document.querySelectorAll("input[type='checkbox']:checked");
  let checkedType = []
    Type.forEach(genre => {
      checkedType.push(genre.value)
    })
  console.log(Type)
  let user = sessionStorage.getItem("id");
  console.log(user);
  let Picture = document.querySelector("#inputImg").files;
  let pictureData = new FormData();
  pictureData.append("files", Picture[0]);
  console.log(checkedType)
  await axios
    .post("http://localhost:1337/api/upload", pictureData)
    .then(async (response) => {
      await axios.post("http://localhost:1337/api/books?populate=*", {
        data: {
          Title,
          Author,
          Pages,
          Grades,
          genres:checkedType,
          user,
          Picture: response.data[0].id,
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        catch(err) {
          console.log(err.message);
          res.status(500).send("Server Error");
        },
      });
      allbookscontainer.innerHTML =" "
      book();
      soundBook();
      Title.value = " ";
      Author.value = " ";
      Pages.value = " ";
      Grades.value = " ";
      Type.value = " ";
      Picture.value = " ";
      alert("Du har lagt till en bok")
    });
};

const addsoundBokBtn = async () => {
  let Title = document.querySelector("#inputTitle").value;
  let Releasedate = document.querySelector("#inputReleasedate").value;
  let Length = document.querySelector("#inputaudi").value;
  let Grades = document.querySelector("#inputgradessound").value;
  let Type = document.querySelectorAll("input[type='checkbox']:checked");
  let checkedType = []
    Type.forEach(genre => {
      checkedType.push(genre.value)
    })
  let user = sessionStorage.getItem("id");
  let Picture = document.querySelector("#inputImg2").files;
  let pictureData = new FormData();
  pictureData.append("files", Picture[0]);
  await axios
    .post("http://localhost:1337/api/upload", pictureData)
    .then(async (response) => {
      await axios.post("http://localhost:1337/api/soundbooks?populate=*", {
        data: {
          Title,
          Releasedate,
          Length,
          Grades,
          genres:checkedType,
          user,
          Picture: response.data[0].id,
        },
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        catch(err) {
          console.log(err.message);
          res.status(500).send("Server Error");
        },
      });
      allbookscontainer.innerHTML =" "
      book();
      soundBook();
      Title.value = " ";
      Releasedate.value = " ";
      Length.value = " ";
      Grades.value = " ";
      Type.value = " ";
      Picture.value = " ";
      alert("Du har lagt till en ljudbok")
    });
};
