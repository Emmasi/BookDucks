//logga in iconen
const iconlog = ()=>{
  startcontainer.classList.add("hidde")
  genrefilter.classList.add("hidde")
  loginContainer.classList.remove("hidde")
}
//se alla låneböcker
const SelibraryBtn = () => {
  youBooks.classList.add("hidde");
  addbook.classList.add("hidde");
  addsoundbook.classList.add("hidde");
  document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
  if (startcontainer.classList.contains("hidde")) {
    startcontainer.classList.remove("hidde");
    document.querySelector("#SelibraryBtn").style.backgroundColor =
      "goldenrod";
  } else {
    startcontainer.classList.add("hidde");
    document.querySelector("#SelibraryBtn").style.backgroundColor =
      "#fff000";
  }
};
//Se inloggades böcker
const SeBookBtn = () => {
  startcontainer.classList.add("hidde");
  addbook.classList.add("hidde");
  addsoundbook.classList.add("hidde");
  document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
  document.querySelector("#SelibraryBtn").style.backgroundColor = "#fff000";
  if (youBooks.classList.contains("hidde")) {
    youBooks.classList.remove("hidde");
    document.querySelector("#SeBookBtn").style.backgroundColor = "goldenrod";
  } else {
    youBooks.classList.add("hidde");
    document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  }
};
//lägga till böcker
const addBookBtn = () => {
  startcontainer.classList.add("hidde");
  youBooks.classList.add("hidde");
  document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  document.querySelector("#SelibraryBtn").style.backgroundColor = "#fff000";
  if (addbook.classList.contains("hidde")) {
    addbook.classList.remove("hidde");
    addsoundbook.classList.remove("hidde");
    document.querySelector("#addBookBtn").style.backgroundColor = "goldenrod";
  } else {
    addbook.classList.add("hidde");
    addsoundbook.classList.add("hidde");
    document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
  }
};
// ger klick event till knappar
document.querySelector("#SeBookBtn").addEventListener("click", SeBookBtn);
document.querySelector("#addBookBtn").addEventListener("click", addBookBtn);
document.querySelector("#SelibraryBtn").addEventListener("click", SelibraryBtn);
document.querySelector("#iconlog").addEventListener("click",iconlog)
