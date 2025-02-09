let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

btn.forEach(button => {
    button.addEventListener("click", function () {
        if (this.innerHTML === "=") {
            try {
                value.innerHTML = eval(value.innerHTML);
            } catch {
                value.innerHTML = "Error";
            }
        } else if (this.innerHTML === "C") {
            value.innerHTML = "";
        } else {
            if (value.innerHTML === "0") value.innerHTML = "";
            value.innerHTML += this.innerHTML;
        }
    });
});