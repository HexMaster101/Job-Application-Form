// RETRIEVING DATA

const searchBtn = document.getElementById("searchBtn");
const searchQuery = document.getElementById("searchQuery");

async function searchInDatabase(jobType) {
	try {
		const response = await fetch("http://localhost:3301/search-user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ jobType }),
		});

		const data = await response.json();
		console.log(data); // You can replace this with a user-friendly alert or message on the page
	} catch (error) {
		console.error("Error:", error);
	}
}

searchBtn.addEventListener("click", (event) => {
	if (searchQuery.value !== "") {
		event.preventDefault();
		console.log(searchQuery.value);
		searchInDatabase(searchQuery.value);
	}
});
