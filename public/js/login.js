const $ = (id) => document.getElementById(id);

window.onload = function () {

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
                //this.classList.add("is-valid");
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
                if (!result.data) {
                    $("msgError-email").innerHTML = "El email no se encuentra registrado";
                    this.classList.add("is-invalid");
                }
            }
        } catch (error) {
            console.error();
        }
    });

    /************************* PASSWORD VALIDATIONS **************************/

    $("password").addEventListener("blur", function () {
        if (!this.value.trim()) {
            $("msgError-password").innerHTML = "La contraseña es obligatoria";
            this.classList.add("is-invalid");
        }
    });

    $("password").addEventListener("focus", function () {
        $("msgError-password").innerHTML = null;
        this.classList.remove("is-invalid");
    });

    /************************* FORM VALIDATIONS **************************/

    $("formLogin").addEventListener("submit", function (e) {
        e.preventDefault();

        const elementsForm = $("formLogin").elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')){
                elementsForm[i].classList.add("is-invalid");
                error = true;
            }
        }

        !error && this.submit();
    });
};
