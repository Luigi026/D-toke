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
                this.classList.add("is-valid");
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
                this.classList.add("is-valid");
                break;
        }
    });

    $("surname").addEventListener("focus", function (e) {
        $("msgError-surname").innerHTML = null;
        this.classList.remove("is-invalid");
    });

    /************************* EMAIL VALIDATIONS **************************/

    $("email").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                $("msgError-email").innerHTML = "El email es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                $("msgError-email").innerHTML = "El email es inválido";
                this.classList.add("is-invalid");
                break;
            default:
                $("msgError-email").innerHTML = null;
                this.classList.remove("is-invalid");
                break;
        }
    });

    $("email").addEventListener("focus", function () {
        $("msgError-email").innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $("email").addEventListener("change", async function (e) {
        try {
            const response = await fetch(`/api/check-email?email=${this.value}`);
            const result = await response.json();

            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value)) {
                if (result.data) {
                    $("msgError-email").innerHTML = "El email ya se encuentra registrado";
                    this.classList.add("is-invalid");
                }
            }
        } catch (error) {
            console.error();
        }
    });

    /************************* PASSWORD VALIDATIONS **************************/

    $("password").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                $("msgError-password").innerHTML = "La contraseña es obligatoria";
                this.classList.add("is-invalid");
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(
                this.value
            ):
                $("msgError-password").innerHTML =
                    "El password debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial";
                this.classList.add("is-invalid");
                break;
            default:
                $("msgError-password").innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $("password").addEventListener("focus", function () {
        $("msgError-password").innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $("password2").addEventListener("focus", function () {
        $("msgError-password2").innerHTML = null;
        this.classList.remove("is-invalid");
    });
    $("password2").addEventListener("blur", function (e) {
        switch (true) {
            case !this.value.trim():
                $("msgError-password2").innerHTML = "Debes confirmar tu contraseña";
                this.classList.add("is-invalid");
                break;
            case this.value.trim() !== $("password").value.trim():
                $("msgError-password2").innerHTML = "Las contraseñas no coinciden";
                this.classList.add("is-invalid");
                break;
            default:
                $("msgError-password2").innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    /************************* FORM VALIDATIONS **************************/

    $("formRegister").addEventListener("submit", function (e) {
        e.preventDefault();
        const elementsForm = $("formRegister").elements;
        let error = false;
        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                elementsForm[i].classList.add("is-invalid");
                error = true;
            }
        }
        !error && this.submit();
    });
};
