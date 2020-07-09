async function gotData() {
    let bgPage = chrome.extension.getBackgroundPage();
    let bgdata = bgPage.data;
    await axios
        .post("https://mcq-practice-backend.herokuapp.com/add", bgdata)
        .then((resp) => {
            document.getElementById('status').innerText = "successfully added"
        })
        .catch((err) => {
            document.getElementById('status').innerText = "fail to add"
        });
}
gotData();