const $ = (id) => document.getElementById(id);

window.onload = function () {
    /************************* NAME VALIDATIONS **************************/

    $("name").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                $("msgError-name").innerHTML = "El nombre es obligatorio";
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

    /************************* SURNAME VALIDATIONS **************************/

    $("surname").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                $("msgError-surname").innerHTML = "El apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $("msgError-surname").innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break;
            case this.value.trim().length < 2:
                $("msgError-surname").innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break;
            default:
                $("msgError-surname").innerHTML = null;
                this.classList.remove("is-invalid");
                break;
        }
    });

    $("surname").addEventListener("focus", function (e) {
        $("msgError-surname").innerHTML = null;
        this.classList.remove("is-invalid");
    });

    /************************* FORM VALIDATIONS **************************/

    $("formProfile").addEventListener("submit", function (e) {
        e.preventDefault();

        const elementsForm = $("formProfile").elements;
        let error = false;

        for (let i = 0; i < elementsForm.length; i++) {
            if (
                !elementsForm[i].value.trim() || elementsForm[i].classList.contains("is-invalid")) {
                elementsForm[i].classList.add("is-invalid");
                error = true;
            }
        }

        !error && this.submit();
    });
};
