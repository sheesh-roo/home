const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        searchInput.value = '';
    }
};

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') performSearch();
});
searchButton.addEventListener('click', performSearch);

//Weather
const apiKey = 'cc1132a09c959c92752a7424100015b0'; // Replace with your API key
const city = 'Indore'; // Replace with your city
const weatherWidget = document.getElementById('weather-widget');

const fetchWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherWidget.innerHTML = '<p>You\'re disconnected, Babe :(</p>';
    }
};

const displayWeather = (data) => {
    const weatherDescription = data.weather[0].description.toLowerCase();
    let weatherIcon = '';

    if (weatherDescription.includes('clear')) {
        weatherIcon = '<i class="fas fa-sun"></i>';
    } else if (weatherDescription.includes('cloud')) {
        weatherIcon = '<i class="fas fa-cloud"></i>';
    } else if (weatherDescription.includes('rain')) {
        weatherIcon = '<i class="fas fa-cloud-showers-heavy"></i>';
    } else if (weatherDescription.includes('snow')) {
        weatherIcon = '<i class="fas fa-snowflake"></i>';
    } else if (weatherDescription.includes('thunderstorm')) {
        weatherIcon = '<i class="fas fa-bolt"></i>';
    } else {
        weatherIcon = '<i class="fas fa-smog"></i>'; // Default icon for other conditions
    }

    weatherWidget.innerHTML = `
        <div class="weather-info">
            <p>Temperature: ${data.main.temp} °C</p>
            <p>${weatherIcon} ${data.weather[0].description}</p>
        </div>
    `;
};

fetchWeather();


// Bookmarks
const bookmarks = [
    {
        bookmarks: [
            { icon: '<i class="fab fa-instagram"></i>', label: "Instagram", url: "https://www.instagram.com/sheesh.roo/" },
            { icon: '<i class="fa-brands fa-facebook-f"></i>', label: "Facebook", url: "https://www.facebook.com/login/" },
            { icon: '<i class="fab fa-twitter"></i>', label: "Twitter", url: "https://x.com/home" }
        ]
    },
    {
        bookmarks: [
            { icon: '<i class="fa-solid fa-o"></i>', label: "ChatGPT", url: "https://chatgpt.com/" },
            { icon: '<i class="fas fa-brain"></i>', label: "Gemini", url: "https://gemini.google.com/app?hl=en-IN" },
            { icon: '<i class="fa-solid fa-ghost"></i>', label: "Gamma", url: "https://gamma.app/" }
        ]
    },
    {
        bookmarks: [
            { icon: '<i class="fa-regular fa-envelope"></i>', label: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
            { icon: '<i class="fa-brands fa-pinterest-p"></i>', label: "Pinterest", url: "https://in.pinterest.com/" },
            { icon: '<i class="fab fa-youtube"></i>', label: "YouTube", url: "https://www.youtube.com/" }
            // { icon: '<i class="fas fa-brain"></i>', label: "Allen", url: "https://www.allen.ac.in/indore/" }
        ]
    },
    {
        bookmarks: [
            { icon: '<i class="fas fa-film"></i>', label: "Movies", url: "https://binged.to/" },
            { icon: '<i class="fas fa-tv"></i>', label: "Anime", url: "https://hianime.to/" },
            { icon: '<i class="fa-solid fa-n"></i>', label: "Netflix", url: "https://netmirror.app/" }
        ]
    }
];

const injectBookmarks = () => {
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarks.forEach(group => {
        bookmarksContainer.innerHTML += `
            <div class="bookmark-group">
                <ul>
                    ${group.bookmarks.map(({ url, icon, label }) => `
                        <li>
                            <a href="${url}">
                                ${icon}
                                <span class="bookmark-label">${label}</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
};

injectBookmarks();
