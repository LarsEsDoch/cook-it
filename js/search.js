const staticPages = [
    {
        id: "about-us.html",
        title: "About Us - Who we are",
        description: "Learn more about Cookit.de, our mission, and the team behind the recipes.",
        content: "Nothing here",
        isPage: true
    },
    {
        id: "legal-notice.html",
        title: "Legal Notice (Imprint)",
        description: "Official legal disclosure, contact information, and operating details for Cookit.de.",
        content: "Legal Notice\n" +
            "Information according to § 5 TMG (German Telemedia Act)\n" +
            "Tandoori Roti\n" +
            "5 Panchsheel Vihar, Block H\n" +
            "Khirki Extension, Malviya Nagar, New Delhi, Delhi 110017\n" +
            "India\n" +
            "\n" +
            "Contact Information\n" +
            "Phone: +91 67123467\n" +
            "\n" +
            "E-mail: aakash.da.dhaba@haram.de\n" +
            "\n" +
            "Person Responsible for Editorial Content\n" +
            "Rajma Masala\n" +
            "5 Panchsheel Vihar, Block H\n" +
            "Khirki Extension, Malviya Nagar, New Delhi, Delhi 110017\n" +
            "India\n" +
            "\n" +
            "EU Dispute Resolution\n" +
            "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr.\n" +
            "Our e-mail address can be found above in the legal notice.\n" +
            "\n" +
            "Dispute Resolution Proceedings before a Consumer Arbitration Board\n" +
            "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        isPage: true
    },
    {
        id: "privacy-policy.html",
        title: "Privacy Policy",
        description: "Information on data protection, cookies, and your rights on our platform.",
        content: "Privacy Policy\n" +
            "Last updated: May 2026\n" +
            "\n" +
            "1. General Information\n" +
            "Welcome to Cookit.de. The protection of your personal data is very important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services, including browsing, account creation, and uploading recipes. We treat your personal data confidentially and in accordance with the statutory data protection regulations (GDPR).\n" +
            "\n" +
            "2. Data Controller\n" +
            "The data controller responsible for processing data on this website is:\n" +
            "Chana Masala\n" +
            "5 Panchsheel Vihar, Block H\n" +
            "Khirki Extension, Malviya Nagar, New Delhi, Delhi 110017\n" +
            "India\n" +
            "\n" +
            "Email: aakash.da.dhaba@haram.de\n" +
            "\n" +
            "3. Data Collection on Our Website\n" +
            "Server Log Files\n" +
            "The provider of this website automatically collects and stores information in so called \"server log files\", which your browser automatically transmits to us. This includes your IP address, browser type and version, operating system used, referrer URL, and the time of the server request. This data is necessary for the technical operation and security of the site and is not merged with other data sources.\n" +
            "\n" +
            "Account Creation and Recipe Uploads\n" +
            "To use certain features of Cookit.de, such as uploading your own recipes, you must create a user account. When you register, we collect the personal data you voluntarily provide, including your chosen username and email address. Furthermore, when you upload a recipe including text instructions, ingredients, and images, this content is stored on our servers and made publicly visible to other users on the platform. We process this data based on your consent and our legitimate interest in providing an interactive recipe sharing platform.\n" +
            "\n" +
            "4. Cookies\n" +
            "Our website uses \"cookies\". Cookies are small text files that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or permanently (permanent cookies). We use cookies to enable core functionalities, such as keeping you logged in when you upload recipes or interact with the platform, and to ensure the website runs smoothly and securely.\n" +
            "\n" +
            "5. Your Rights Regarding Your Data\n" +
            "You have the right to request information about your stored personal data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that it be corrected, blocked, or deleted. If you have created an account and uploaded recipes, you can request the deletion of your account and all associated user generated content at any time. For this, or if you have any other questions about privacy, you can contact us at the email address provided above.",
        isPage: true
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const searchTitle = document.getElementById("search-title");
    const searchInput = document.getElementById("search");
    const searchPageInput = document.getElementById("search-page-input");

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("q");

    if (!searchQuery) {
        if (searchTitle) searchTitle.textContent = "No search term entered.";

        if (searchPageInput) {
            searchPageInput.focus();
        }

        return;
    }

    const cleanQuery = searchQuery.trim();
    if (searchTitle) {
        searchTitle.textContent = `Search results for: "${cleanQuery}"`;
    }

    if (searchInput) {
        searchInput.value = cleanQuery;
    }

    if (searchPageInput) {
        searchPageInput.value = cleanQuery;
    }

    const lowerQuery = cleanQuery.toLowerCase();

    const allRecipes = typeof recipes !== 'undefined' ? recipes : [];

    const allSearchableContent = [...allRecipes, ...staticPages];

    const filteredResults = allSearchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const contentMatch = item.content && item.content.toLowerCase().includes(lowerQuery);
        const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);

        const ingredientsMatch = item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery));

        return titleMatch || descriptionMatch || contentMatch || ingredientsMatch;
    });

    renderSearchResults(filteredResults);
});

function renderSearchResults(resultsToRender) {
    const recipesList = document.getElementById("recipes-list");
    if (!recipesList) return;
    recipesList.innerHTML = "";

    if (resultsToRender.length === 0) {
        recipesList.innerHTML = `<p class="no-results">No results matched your search.</p>`;
        return;
    }

    resultsToRender.forEach((item) => {
        const card = document.createElement("article");
        card.classList.add("recipe-card");

        const targetUrl = item.isPage ? item.id : `recipe-detail.html?id=${item.id}`;
        const buttonText = item.isPage ? "Open Page" : "View recipe";

        card.innerHTML = `
            ${!item.isPage ? `
                <img src="${item.image}" alt="${item.title}">
            ` : `
                <div class="search-page-banner">
                    <span>ℹ️ Info Page</span>
                </div>
            `}
            
            <div class="recipe-card-content">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                
                ${!item.isPage ? `
                <div class="recipe-meta">
                    <span>${item.time}</span>
                    <span>${item.difficulty}</span>
                </div>` : ''}
                
                <a href="${targetUrl}" class="btn">${buttonText}</a>
            </div>
        `;
        recipesList.appendChild(card);
    });
}