const iconlog = ()=>{
  startcontainer.classList.add("hidde")
  genrefilter.classList.add("hidde")
  loginContainer.classList.remove("hidde")
}
const SelibraryBtn = () => {
  youBooks.classList.add("hidde");
  addbook.classList.add("hidde");
  addsoundbook.classList.add("hidde");
  // persinolinfo.classList.add("hidde");
  document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
  // document.querySelector("#profileBtn").style.backgroundColor = "#fff000";
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
const SeBookBtn = () => {
  startcontainer.classList.add("hidde");
  addbook.classList.add("hidde");
  addsoundbook.classList.add("hidde");
  // persinolinfo.classList.add("hidde");
  document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
  // document.querySelector("#profileBtn").style.backgroundColor = "#fff000";
  document.querySelector("#SelibraryBtn").style.backgroundColor = "#fff000";
  if (youBooks.classList.contains("hidde")) {
    youBooks.classList.remove("hidde");
    document.querySelector("#SeBookBtn").style.backgroundColor = "goldenrod";
  } else {
    youBooks.classList.add("hidde");
    document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  }
};
const addBookBtn = () => {
  startcontainer.classList.add("hidde");
  youBooks.classList.add("hidde");
  // persinolinfo.classList.add("hidde");
  document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
  document.querySelector("#SelibraryBtn").style.backgroundColor = "#fff000";
  // document.querySelector("#profileBtn").style.backgroundColor = "#fff000";
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
// const profileBtn = () => {
//   youBooks.classList.add("hidde");
//   addbook.classList.add("hidde");
//   addsoundbook.classList.add("hidde");
//   startcontainer.classList.add("hidde");
//   document.querySelector("#SeBookBtn").style.backgroundColor = "#fff000";
//   document.querySelector("#addBookBtn").style.backgroundColor = "#fff000";
//   document.querySelector("#SeOthersBookBtn").style.backgroundColor = "#fff000";
//   if (persinolinfo.classList.contains("hidde")) {
//     persinolinfo.classList.remove("hidde");
//     document.querySelector("#profileBtn").style.backgroundColor = "goldenrod";
//   } else {
//     persinolinfo.classList.add("hidde");
//     document.querySelector("#profileBtn").style.backgroundColor = "#fff000";
//   }
// };

document.querySelector("#SeBookBtn").addEventListener("click", SeBookBtn);
document.querySelector("#addBookBtn").addEventListener("click", addBookBtn);
// document.querySelector("#profileBtn").addEventListener("click", profileBtn);
document.querySelector("#SelibraryBtn").addEventListener("click", SelibraryBtn);
document.querySelector("#iconlog").addEventListener("click",iconlog)
