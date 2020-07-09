console.log("your getQuest is running");

var btn = document.createElement("button");
btn.innerHTML = "Add Question";
btn.id = "addQues";
btn.style.display = "block";
btn.style.zIndex = "+100";
btn.style.background = "white";
btn.style.position = "absolute";
document.body.prepend(btn);

document.getElementById("addQues").onclick = () => {
    addQuest();
};
async function addQuest() {
    console.log("rec");
    var data = {};
    data.question = document
        .querySelectorAll(".que-ans-box div.mar-b16")[0]
        .innerHTML.replace(/\n/g, "<br>");
    var li = document.querySelectorAll(".que-ans-box li label div.ng-binding");
    for (i = 0; i < 5; i++) data["op" + (i + 1)] = li[i].innerHTML;

    switch (document.querySelectorAll("#sectionNavTabs .active")[0].innerText) {
        case "English Language":
            data.category = "english";
            break;
        case "Numerical Ability":
            data.category = "quant";
            break;
        case "Reasoning Ability":
            data.category = "verbal";
            break;
        default:
            break;
    }
    data.answer = document.querySelector(".correct-icon label div").innerHTML;
    if (
        data.question == undefined ||
        data.answer == undefined ||
        data.category == undefined
    )
        return null;
    else {
        return chrome.runtime.sendMessage(data);
    }
}