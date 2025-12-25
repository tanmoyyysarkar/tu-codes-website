export default function Events() {
    const events = [
        {
            title: "Lorem Ipsum Workshop",
            date: "January 15, 2024",
            time: "2:00 PM - 5:00 PM",
            location: "Lorem Building, Room 301",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "Workshop",
            color: "blue",
        },
        {
            title: "Dolor Sit Hackathon",
            date: "January 22, 2024",
            time: "9:00 AM - 6:00 PM",
            location: "Ipsum Hall",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            category: "Hackathon",
            color: "red",
        },
        {
            title: "Consectetur Tech Talk",
            date: "February 5, 2024",
            time: "4:00 PM - 6:00 PM",
            location: "Amet Auditorium",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            category: "Tech Talk",
            color: "green",
        },
        {
            title: "Adipiscing Coding Competition",
            date: "February 12, 2024",
            time: "10:00 AM - 4:00 PM",
            location: "Lorem Lab 202",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category: "Competition",
            color: "yellow",
        },
        {
            title: "Elit Networking Session",
            date: "February 20, 2024",
            time: "5:00 PM - 7:00 PM",
            location: "Dolor Cafe",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            category: "Networking",
            color: "purple",
        },
        {
            title: "Incididunt Project Showcase",
            date: "March 1, 2024",
            time: "3:00 PM - 6:00 PM",
            location: "Sit Exhibition Hall",
            description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            category: "Showcase",
            color: "pink",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; badge: string } } = {
            blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600" },
            red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-600" },
            green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-600" },
            yellow: { bg: "bg-yellow-50", border: "border-yellow-200", badge: "bg-yellow-600" },
            purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-600" },
            pink: { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-600" },
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="bg-gray-50 py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => {
                        const colors = getColorClasses(event.color);
                        return (
                            <div
                                key={index}
                                className={`${colors.bg} rounded-3xl p-8 hover:shadow-xl transition-all border ${colors.border}`}
                            >
                                {/* Category Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`${colors.badge} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                                        {event.category}
                                    </span>
                                </div>

                                {/* Event Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {event.title}
                                </h3>

                                {/* Event Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="text-lg">📅</span>
                                        <span className="font-medium">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="text-lg">🕒</span>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="text-lg">📍</span>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {event.description}
                                </p>

                                {/* Register Button */}
                                <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg">
                                    Register Now
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-400 to-blue-700 rounded-3xl p-12 text-center text-white shadow-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Lorem Ipsum Dolor Sit?
                    </h3>
                    <p className="text-xl mb-8 text-blue-100">
                        Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                    <a
                        href="/join"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </section>
    );
}
