document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#menu a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            console.log(currentPage)
            if (currentPage !== "add-recipe.html") {
                link.removeAttribute("href");
            }
        }
    });
});