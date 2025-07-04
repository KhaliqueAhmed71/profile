export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Project 1 */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A responsive portfolio website built using React and Tailwind CSS with smooth scroll and dark mode.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300">
              An interactive dashboard layout featuring sidebar toggle, dark mode, and animated transitions.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A real-time weather app using OpenWeather API that shows current weather and forecasts with sleek UI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
