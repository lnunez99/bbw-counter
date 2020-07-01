let inStore = 0;
let total = 0;

let currentCount = document.querySelector(".count");

let admitOne = document.querySelector("#In");

let letOut = document.querySelector("#Out");

admitOne.addEventListener("click", event => {
	if (inStore != 12)
	{
		inStore++;
		currentCount.textContent = inStore;
		console.log(inStore);	
	}
	// Notification coming soon.
	
	;})

letOut.addEventListener("click", event => {
	if (inStore != 0)
	{
		inStore--;
		currentCount.textContent = inStore;
		console.log(inStore);	
	}
})


