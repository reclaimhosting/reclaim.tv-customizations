doTheTV();

function doTheTV(){
	const url = 'https://archive.reclaim.tv/api/v1/videos';
	const data = tvFetch(url);
}

async function tvFetch(url) {
	  const response = await fetch(url);
	  const data = await response.json();
	  makeTVList(data);
	}


function makeTVList(data){
	const destination = document.getElementById("latest-videos");
	const preview = data.data;
	//console.log(preview);
	let postCount = 0;
         preview.forEach((element) => {
         	postCount = postCount+1;
         	//console.log(postCount)
            if(postCount < 10){
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