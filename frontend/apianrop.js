const book = async () => {
  let { data } = await axios.get("http://localhost:1337/api/books?populate=*");
  allFreeBooks(data)
  allbooks(data);
};
const soundBook = async () => {
  let { data } = await axios.get("http://localhost:1337/api/soundbooks?populate=*");
  allFreeSoundbooks(data)
  allSoundbooks(data);
};
const createTime = async () => {
  let { data } = await axios.get("http://localhost:1337/api/users");
  getTime(data);
};
