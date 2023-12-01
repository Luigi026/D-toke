const $ = (id) => document.getElementById(id);

window.onload = function () {
  /************************* MODEL VALIDATIONS **************************/

  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9-ZÀ-ÿ\s]{1,40}$/.test(this.value):
        $("msgError-name").innerHTML = "No puedes usar caracteres especiales";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("name").addEventListener("focus", function (e) {
    $("msgError-name").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  /************************* PRICE VALIDATIONS **************************/

  $("price").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-price").innerHTML = "El precio es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim() < 1:
        $("msgError-price").innerHTML = "No puede ser menor o igual que cero";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-price").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("price").addEventListener("focus", function (e) {
    $("msgError-price").innerHTML = null;
    this.classList.remove("is-invalid");
  });
  
  /************************* DESCRIPTION VALIDATIONS **************************/

  $("description").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-description").innerHTML = "Debes de poner una descripción";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-description").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("description").addEventListener("focus", function (e) {
    $("msgError-description").innerHTML = null;
    this.classList.remove("is-invalid");
  });
};
