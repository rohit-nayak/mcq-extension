console.log("hello from background.js");

chrome.runtime.onMessage.addListener(recieved);
window.data = {};
async function recieved(request, sender, sendResponse) {
    console.log(request);
    window.data = request;
    await axios
        .get({
            url: "https://mcq-practice-backend.herokuapp.com/add",
            data: request,
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.error(err));
}