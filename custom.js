/*
Latest Videos
*/

// Pull in Videos from archive.reclaim.tv
doTheTV();

function doTheTV() {
    const url = 'https://archive.reclaim.tv/api/v1/videos';
    const data = tvFetch(url);
}

async function tvFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    makeTVList(data);
}

function makeTVList(data) {
    const destination = document.getElementById("latest-videos");
    const preview = data.data;
    //console.log(preview);
    let postCount = 0;
    preview.forEach((element) => {
        postCount = postCount + 1;
        //console.log(postCount)
        if (postCount < 26) {
            const link = element.url;
            const title = element.name;
            const thumbPath = element.thumbnailPath;
            const div = document.createElement("div");
            div.classList.add('tv-past');
            div.innerHTML = `
					<a href="${link}">
						<div class="thumb"><img src="https://archive.reclaim.tv${thumbPath}"/></div>
						<div class="title">${title}</div>	            	
					<a/>
				`;
            destination.appendChild(div);
        }
    });
}

/*
Discord Chat
*/

// Discord Chat button
// Create the main container div
const chatDiv = document.createElement('div');
chatDiv.className = 'discord-chat-button';

// Create the Discord button
const discordButton = document.createElement('button');
discordButton.textContent = 'Discord Chat';
discordButton.className = 'ant-btn ant-btn-primary ActionButton_button__1rwj4';
discordButton.onclick = function() {
    window.open('https://discord.gg/Hg2ArD3hMa', '_blank');
};

// Append elements to the div
chatDiv.appendChild(discordButton);

// Append the div to the header element
const header = document.querySelector('header');
if (header) {
    header.appendChild(chatDiv);
} else {
    console.error('Header element not found');
}



// Widgetbot (currently broken)
/*
// set up iframe
const iframeElement = document.createElement('iframe');
iframeElement.src = 'https://e.widgetbot.io/channels/954008116800938044/1106692850470633573';
iframeElement.height = '100%';

// wait until div with id 'virtuoso' exists, then replace it with discord chat
var interval = setInterval(checkDiv, 500);
function checkDiv() {
    if (document.getElementById('virtuoso')) {
        // div exists
        clearInterval(interval);

        const divElement = document.getElementById('virtuoso');
        // Replace the div element with the iframe
        divElement.replaceWith(iframeElement);

        // Edit User Menu text
        const userMenu = document.querySelector('#user-menu');
        const userMenuText = userMenu.querySelector(':nth-child(2)');
        userMenuText.textContent = 'Toggle Chat';

        // Make user-menu button toggle display of chat
        document.getElementById("user-menu").onclick = function () {
            var div = document.getElementById("chat-container");
            if (div.style.display === "none") {
                div.style.display = "flex";
            } else {
                div.style.display = "none";
            }
        };
    }
}

// Replace built-in Chat with Discord on Mobile every time you click the button
var mobileInterval = setInterval(checkDiv, 500);
function checkMobileDiv() {
    if (document.getElementById('chat-container')) {
        // div exists
        clearInterval(mobileInterval);

        // Get reference to the div element
        const divElement = document.getElementById('chat-container');
        // Replace the div element with the iframe element
        divElement.replaceWith(iframeElement);
    };

}
*/
