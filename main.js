const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#btn");
const answerArea = document.querySelector("#answerArea");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const multi = document.querySelector("#multi");
const selector = document.querySelector("#selector")


btn.addEventListener("click", function () {
    let con = "";
    let ans;

    switch (selector.value) {
        case "0":
            ans = (+input1.value) + (+input2.value);
            console.log(ans);
            con = `<p class="ms-5 fs-3">${ans}</p>`;
            answerArea.innerHTML = con;
            break;

        case "1":
            ans = parseInt(input1.value) - parseInt(input2.value);
            console.log(ans);
            con = `<p class="ms-5 fs-3">${ans}</p>`;
            answerArea.innerHTML = con;
            break;

        case "2":
            ans = parseInt(input1.value) * parseInt(input2.value);
            console.log(ans);
            con = `<p class="ms-5 fs-3">${ans}</p>`;
            answerArea.innerHTML = con;
            break;

        case "3":
            ans = parseInt(input1.value) / parseInt(input2.value);
            console.log(ans);
            con = `<p class="ms-5 fs-3">${ans}</p>`;
            answerArea.innerHTML = con;
            break;

    }

})


