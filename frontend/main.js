//Knapp
const logoutBtn = () => {
  window.location.reload();
  sessionStorage.clear();
};
const allFreeBooks =(books)=>{
  books.data.forEach((book) => {
      let li = document.createElement("li")
      li.classList.add("loaninfo")
      let{Title, Author, Grades, Pages,Picture,genres,user } = book.attributes;
      const allGenres = genres.data.map((item)=>{
        return item.attributes.Type
      }).join(", ")     
      li.innerHTML = `
      <div>
      <h3> ${Title}</h3>
      <h4>${allGenres}</h4>
      <p> Författare: ${Author}</p>
      <p> Antal sidor: ${Pages}</P>
      <p>Fått betyget ${Grades} &#11088;</p>
      <p>För att låna, kontakta: ${user.data.attributes.email}</p>
        <img src=http://localhost:1337${Picture.data.attributes.url}></div>`;
      allbookscontainer.append(li)  
  });
}
const allFreeSoundbooks =(soundbooks)=>{
    soundbooks.data.forEach((soundbook) => {
      let li = document.createElement("li")
      li.classList.add("loaninfo")
      let{ Title, Grades, Length, Picture,genres, user } = soundbook.attributes;
      const allGenres = genres.data.map((item)=>{
        return item.attributes.Type
      }).join(", ")
      li.innerHTML = `
      <div>
      <h3> ${Title}</h3>
      <h4>${allGenres}</h4>
      <p>Ljudbok</p>
      <p> Längd: ${Length}</p>
      <p>Fått betyget ${Grades} &#11088;</p>
      <p>För att låna, kontakta: ${user.data.attributes.email}</p>
      <img src=http://localhost:1337${Picture.data.attributes.url}></div>`;
      allbookscontainer.append(li)
  });   
}
// bara mina böcker
let allbooks = (items) => {
  let userid = sessionStorage.getItem("id");
  let userbooks = items.data.filter((item) => item.attributes.user.data.id == userid);
  booklist.innerHTML = `<h4>Böcker</h3>`;
  userbooks.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("loaninfo");
    li.innerHTML = `
    <span class="yourbookinfo">
    <div><strong>Title:</strong> ${item.attributes.Title}</div>
    <div><strong>Författare: </strong>${item.attributes.Author}</div>
    <div><strong>Antal sidor: </strong>${item.attributes.Pages}</div>
    <div><strong>Betyg: </strong> ${item.attributes.Grades}&#11088;</div>
    </span>
    <span><img src=${coverPicture(item)}></span>`;
    booklist.append(li);
  });
};

//bara mina ljudböcker
let allSoundbooks = (items) => {
  let userid = sessionStorage.getItem("id");
  let usersoundbooks = items.data.filter(
    (item) => item.attributes.user.data.id == userid
  );
  Soundbooklist.innerHTML = `<h4>Ljudböcker</h3>`;
  usersoundbooks.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("loaninfo");
    li.innerHTML = `
    <span class="yourbookinfo">
    <div><strong>Title:</strong> ${item.attributes.Title}</div>
    <div><strong>Releasedate: </strong>${item.attributes.Releasedate}</div>
    <div><strong>Length: </strong>${item.attributes.Length}</div>
    <div><strong>Betyg: </strong> ${item.attributes.Grades}&#11088;</div></span>
    <span><img src=${coverPicture(item)}></span>`;
    Soundbooklist.append(li);
  });
};

book()
soundBook()

document.querySelector("#registerBtn").addEventListener("click", regiBtn);
document.querySelector("#loginBtn").addEventListener("click", loginBtn);
document.querySelector("#CreateUser").addEventListener("click", CreateUserBtn);
document.querySelector("#addBok").addEventListener("click", addBokBtn);
document
  .querySelector("#addsoundBok")
  .addEventListener("click", addsoundBokBtn);
document.querySelector("#logoutBtn").addEventListener("click", logoutBtn);

