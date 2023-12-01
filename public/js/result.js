const $ = (id) => document.getElementById(id);
const urlBase = "https://apis.datos.gob.ar/georef/api";

window.onload = async function (e) {
  /************************* NAME VALIDATIONS **************************/

  $("formSearch").addEventListener("submit", function (e) {
    e.preventDefault();

    const elementsForm = $("formSearch").elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
      switch (true) {
        case !elementsForm[i].value.trim():
          elementsForm[i].classList.add("is-invalid");
          error = true;
          break;

        default:
          !error && this.submit();
          break;
      }

    }

  });
  // switch (true) {
  //     case !this.value.trim():
  //         e.preventDefault();
  //         this.classList.add("is-invalid");
  //       break;
  //     case !/^[a-zA-Z0-9-ZÀ-ÿ\s]{1,40}$/.test(this.value):
  //         e.preventDefault();
  //         this.classList.add("is-invalid");
  //       break;
  //     case this.value.trim().length < 2:
  //         e.preventDefault();
  //         this.classList.add("is-invalid");
  //       break;
  //     default:
  //       $("msgError-name").innerHTML = null;
  //       this.classList.remove("is-invalid");
  //       this.classList.add("is-valid");
  //       break;
  //   }
};
