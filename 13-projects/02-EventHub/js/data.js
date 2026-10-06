/* =========================================================
   EVENTHUB - EVENT DATA
   ========================================================= */

const eventsData = [
    {
        id: 1,
        title: "Tech Conference 2026",
        category: "Technology",
        date: "2026-10-25",
        time: "10:00 AM",
        location: "New Delhi",
        venue: "India Expo Centre",
        price: 999,
        rating: 4.8,
        attendees: 850,
        organizer: "TechWorld",
        image: "assets/images/events/tech-conference.jpg",
        description:
            "Join developers, designers, founders and technology enthusiasts for an exciting technology conference."
    },

    {
        id: 2,
        title: "Music Night Live",
        category: "Music",
        date: "2026-11-02",
        time: "7:00 PM",
        location: "Mumbai",
        venue: "Phoenix Arena",
        price: 1499,
        rating: 4.7,
        attendees: 1200,
        organizer: "Live Events India",
        image: "assets/images/events/music-night.jpg",
        description:
            "Enjoy an unforgettable night filled with live music, amazing performances and entertainment."
    },

    {
        id: 3,
        title: "Startup & Business Summit",
        category: "Business",
        date: "2026-11-12",
        time: "9:30 AM",
        location: "Bengaluru",
        venue: "Convention Centre",
        price: 799,
        rating: 4.6,
        attendees: 600,
        organizer: "Startup India",
        image: "assets/images/events/business-summit.jpg",
        description:
            "Meet entrepreneurs, investors and business leaders and discover new opportunities."
    },

    {
        id: 4,
        title: "Photography Workshop",
        category: "Workshop",
        date: "2026-11-18",
        time: "11:00 AM",
        location: "Lucknow",
        venue: "Creative Studio",
        price: 499,
        rating: 4.9,
        attendees: 150,
        organizer: "Photo Academy",
        image: "assets/images/events/photography.jpg",
        description:
            "Learn professional photography techniques from experienced photographers."
    },

    {
        id: 5,
        title: "Food Festival",
        category: "Food",
        date: "2026-11-25",
        time: "12:00 PM",
        location: "Delhi",
        venue: "Central Ground",
        price: 299,
        rating: 4.5,
        attendees: 2000,
        organizer: "Food Lovers",
        image: "assets/images/events/food-festival.jpg",
        description:
            "Explore delicious food from different parts of India at this amazing food festival."
    },

    {
        id: 6,
        title: "Digital Marketing Masterclass",
        category: "Education",
        date: "2026-12-05",
        time: "10:00 AM",
        location: "Noida",
        venue: "Business Hub",
        price: 699,
        rating: 4.7,
        attendees: 350,
        organizer: "Digital Academy",
        image: "assets/images/events/digital-marketing.jpg",
        description:
            "Master SEO, social media marketing, advertising and modern digital marketing strategies."
    },

    {
        id: 7,
        title: "Fitness & Wellness Expo",
        category: "Health",
        date: "2026-12-12",
        time: "8:00 AM",
        location: "Pune",
        venue: "Expo Ground",
        price: 399,
        rating: 4.4,
        attendees: 500,
        organizer: "FitLife",
        image: "assets/images/events/fitness.jpg",
        description:
            "Discover fitness, nutrition and wellness activities with professionals."
    },

    {
        id: 8,
        title: "Art & Design Exhibition",
        category: "Art",
        date: "2026-12-20",
        time: "11:00 AM",
        location: "Jaipur",
        venue: "Art Gallery",
        price: 199,
        rating: 4.8,
        attendees: 300,
        organizer: "Creative India",
        image: "assets/images/events/art-design.jpg",
        description:
            "Explore beautiful artwork, creative designs and inspiring artistic experiences."
    }
];


/* =========================================================
   CATEGORIES
   ========================================================= */

const categoriesData = [
    {
        name: "Technology",
        icon: "💻"
    },
    {
        name: "Music",
        icon: "🎵"
    },
    {
        name: "Business",
        icon: "💼"
    },
    {
        name: "Workshop",
        icon: "🛠️"
    },
    {
        name: "Food",
        icon: "🍔"
    },
    {
        name: "Education",
        icon: "📚"
    },
    {
        name: "Health",
        icon: "❤️"
    },
    {
        name: "Art",
        icon: "🎨"
    }
];


/* =========================================================
   LOCATIONS
   ========================================================= */

const locationsData = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Lucknow",
    "Delhi",
    "Noida",
    "Pune",
    "Jaipur"
];


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.eventsData = eventsData;
window.categoriesData = categoriesData;
window.locationsData = locationsData;