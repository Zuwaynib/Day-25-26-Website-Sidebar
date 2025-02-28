let sidebar = document.querySelector(".sidebar");
let dropdownToggler = document.querySelectorAll(".dropdown-toggle");

function toggleDropdown(dropdown, menu, isOpen) {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
}    

function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-container.open").forEach(openDropdown => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    })
}

dropdownToggler.forEach(dropdownToggle => {
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();

        const dropdown = e.target.closest(".dropdown-container");
        const menu = dropdown.querySelector(".dropdown-menu");
        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns();
        toggleDropdown(dropdown, menu, !isOpen);
    });    
});

document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button" ).forEach(button => {
    button.addEventListener("click", () => {
        closeAllDropdowns();
        sidebar.classList.toggle("collapsed");
    })
})

// Collapse sidebar by default on smaller screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.toggle("collapsed");