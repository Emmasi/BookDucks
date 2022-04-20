//logga in knappen. använder username.value och password.value
const loginBtn = async () => {
  const username = document.querySelector("#username").value;
  const userpassword = document.querySelector("#password").value;

  document.querySelector("#welcomeName").innerHTML = `Välkommen fina ${username}`;
  const response = await axios.post("http://localhost:1337/api/auth/local/", {
    identifier: username,
    password: userpassword,
  });
  let token = response.data.jwt;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("username", response.data.user.username);
  sessionStorage.setItem("email", response.data.user.email);
  sessionStorage.setItem("id", response.data.user.id);
  sessionStorage.setItem("createAt", response.data.user.createat);
  loginContainer.classList.add("hidde");
  profileContainer.classList.remove("hidde");
  registerContainer.classList.add("hidde");
  allbookscontainer.innerHTML =" "
  book();
  soundBook();
  createTime();

  getTime = (items) => {
    items.forEach((item) => {
      persinolinfo.innerHTML = `
      <span><h3 class="infotextstyle">${sessionStorage.getItem("username")}</h3></span>
      <p class="infotextstyle">Mitt id är:${sessionStorage.getItem("id")}</p>
      <p class="infotextstyle">Min email:${sessionStorage.getItem("email")}</p>
      <p class="infotextstyle">Registrering datum:${item.createdAt.slice(0, 10)}</p>`;
    });
  };
};

const regiBtn = () => {
  if (registerContainer.classList.contains("hidde")) {
    registerContainer.classList.remove("hidde");
  } else {
    registerContainer.classList.add("hidde");
  }
};
//skapa användare
const CreateUserBtn = async () => {
  let newusername = document.querySelector("#newname");
  let newuseremail = document.querySelector("#newemail");
  let newuserpassword = document.querySelector("#newpassword");

  const respnse = await axios.post(
    "http://localhost:1337/api/auth/local/register",
    {
      username: newusername.value,
      email: newuseremail.value,
      password: newuserpassword.value,
    }
  );
  newusername.value = " ";
  newuseremail.value = " ";
  newuserpassword.value = " ";
};
