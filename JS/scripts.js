const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formContext = new FormData(form);
  if (!Array.from(formContext.entries()).length) {
    console.log("...data: No data received");
    return;
  }
  for (let [key, value] of formContext.entries()) {
    console.log(key, ":", value);
  }
});
