const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        btn.textContent = "☀️";
    }else{
        btn.textContent = "🌙";
    }

});
