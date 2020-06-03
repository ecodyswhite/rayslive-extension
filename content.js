console.log("Chrome extension go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
	if (message.txt === "hello") {

		let dividers = document.getElementsByTagName('div');
for (elt of dividers) {
	elt.style['background-color'] = '#615d50';

		let background = document.getElementsByTagName('body');
for (elt of background) {
	elt.style['background-color'] = '#453a33';
}
}

	}
}