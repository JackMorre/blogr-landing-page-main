document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches(".link");
	if (!isDropdownButton && e.target.closest(".link-container") != null) return;
	console.log(isDropdownButton);
	let currentdropdown;
	if (isDropdownButton) {
		currentdropdown = e.target.closest(".link-container");
		console.log(currentdropdown);
		currentdropdown.classList.toggle("active");
	}

	document.querySelectorAll(".link-container.active").forEach((dropdown) => {
		if (dropdown === currentdropdown) return;
		dropdown.classList.remove("active");
	});
});

const openClose = document.querySelector(".openclose");
const mainDropdown = document.querySelector(".header");

openClose.addEventListener("click", function () {
	mainDropdown.classList.toggle("clicked");
});
