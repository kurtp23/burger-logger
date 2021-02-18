const btnFunc = () => {
  const btns = document.getElementsByClassName("eat");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
      event.preventDefault();
      fetch(`/${event.target.id}`, { method: "PUT" });
      window.location.reload();
    });
  }
};
btnFunc();
