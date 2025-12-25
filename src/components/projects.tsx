export default function Projects() {
    const projects = [
        {
            title: "Lorem Ipsum Platform",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
            tech: ["Lorem", "Ipsum", "Dolor"],
            status: "Completed",
            color: "blue",
        },
        {
            title: "Dolor Sit Application",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            tech: ["Consecte", "Adipiscing", "Elit"],
            status: "In Progress",
            color: "red",
        },
        {
            title: "Consectetur Tool",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo.",
            tech: ["Tempor", "Incididunt", "Labore"],
            status: "Completed",
            color: "green",
        },
        {
            title: "Adipiscing System",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            tech: ["Dolore", "Magna", "Aliqua"],
            status: "In Progress",
            color: "yellow",
        },
        {
            title: "Elit Framework",
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
            tech: ["Veniam", "Quis", "Nostrud"],
            status: "Completed",
            color: "purple",
        },
        {
            title: "Incididunt Dashboard",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
            tech: ["Exercitation", "Ullamco", "Laboris"],
            status: "Planning",
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
        <section className="bg-white py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => {
                        const colors = getColorClasses(project.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-200 hover:border-gray-300"
                            >
                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`${colors.badge} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                                        {project.status}
                                    </span>
                                    <span className="text-2xl">🚀</span>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`${colors.bg} ${colors.border} border px-3 py-1 rounded-full text-sm font-medium text-gray-700`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Button */}
                                <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg">
                                    View Details
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Lorem Ipsum Project?
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore!
                    </p>
                    <a
                        href="/join"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
                    >
                        Join Our Team
                    </a>
                </div>
            </div>
        </section>
    );
}
