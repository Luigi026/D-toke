const $ = (id) => document.getElementById(id);

window.onload = async function (e) {

  /************************* SEARCH VALIDATIONS **************************/

  $("formSearch").addEventListener("submit", function (e) {
    e.preventDefault();

    const keywords = $("keywords");

    if (!/^[A-Za-z\s]+$/.test(keywords.value) === true) {
      keywords.classList.add("is-invalid");
    } else {
      this.submit();
    }
  });

  $("keywords").addEventListener("keypress", function (e) {
    this.classList.remove("is-invalid");
  });
};
