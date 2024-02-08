const chatBody = document.querySelector(".chat-body");/*from index.html*/
const textinput = document.querySelector("#textinput");
const send = document.querySelector(".send");

send.addEventListener("click", () => {
	console.log("Send button clicked");
	renderUserMessage()}
	);

textinput.addEventListener("keyup", (event) =>{
	console.log("Key pressed:",event.keyCode);
	if (event.keyCode === 13)/*13 corresponds to the enter key so can enter without clicking enter*/
	{
		renderUserMessage();
	}
});

const renderUserMessage = () => {
	const userInput = textinput.value;
	console.log("userInput:",userInput);
	renderMessageELe(userInput);
	textinput.value ="";  /*pressing enter displays message*/
	renderChatbotResponse(userInput);
};

const renderChatbotResponse = (userInput) => {
	const res = getChatbotResponse(userInput);
	console.log("Chatbot response:",res);
	renderMessageELe(res);
}

const renderMessageELe= (txt) => {
	const messageELe = document.createElement("div");
	const txtNode = document.createTextNode(txt);
	messageELe.classList.add("user-message");
	messageELe.appendChild(txtNode);
	chatBody.appendChild(messageELe);
};
const responseObj = {
	Hello:"Hey ! How are you doing?",
	Hey:"Namaste ! how are you doing?",
	Bye:"Bye sir.Have a nice day!",
	today: new Date().toDateString(),
	time: new Date().toLocaleTimeString(),
	gay:"No u gay .Go suck diks",
	Iloveu:"I love u too.Hearts......",

};

 const getChatbotResponse = (userInput) => {
 	 

	return responseObj[userInput] ==undefined?"Sorry I can't understand.": responseObj[userInput];/*If the user input is not availabe in object keys it is gonna return the undefined values given in response.js*/
};
