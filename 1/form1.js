const form = document.querySelector("form");
const input = document.querySelector("input");
const surname = document.querySelector("#surname");
const firstname = document.querySelector("#firstname");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const number = document.querySelector("#number");
const submit = document.querySelector(".submit");
const date = new Date();

submit.addEventListener("click", click);

function click() {
    const body = {
        age: age.value,
        surname: surname.value,
        firstname: firstname.value,
        number: number.value,
        email: email.value
    };

    if (surname.value === "" || firstname.value === "" || age.value === "" || email.value === "") {
        alert("لطفاً همه‌ی قسمت‌ها را تکمیل کنید")
        return
    }
    else {
        alert(" کاربر" + firstname.value + " " + surname.value + "; " + "اطلاعات شما شامل" + age.value + "; " + email.value + "; " + number.value + " در تاریخ " + date + " ثبت گردید  "),

            surname.value = ""; firstname.value = ""; age.value = ""; number.value = ""; email.value = "";
    }
}
