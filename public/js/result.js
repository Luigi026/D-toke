const $ = (id) => document.getElementById(id);
const urlBase = "https://apis.datos.gob.ar/georef/api";

window.onload = async function (e) {
    /************************* NAME VALIDATIONS **************************/

    $("keywords").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $("msgError-name").innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break;
            case this.value.trim().length < 2:
                $("msgError-name").innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break;
            default:
                $("msgError-name").innerHTML = null;
                this.classList.remove("is-invalid");
                break;
        }
    });

    $("name").addEventListener("focus", function (e) {
        $("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
    });

}