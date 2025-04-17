
export default function NorthernMadeMaps() {
  return (
    <main
      className="min-h-screen bg-[#f5f2ee] text-gray-900 font-sans"
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat"
      }}
    >
      <div className="max-w-5xl mx-auto p-6 bg-white bg-opacity-90">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png"
              alt="Northern Made Maps logo"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h1 className="text-4xl font-bold">Northern Made Maps</h1>
              <p className="text-md text-gray-600">Made in the North. For the North.</p>
            </div>
          </div>
        </header>

        <section className="mb-16 text-center bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4">Mapping Canada's North with Precision and Purpose</h2>
          <p className="text-lg text-gray-700">
            We combine remote sensing, GIS, and northern knowledge to create data tools and visualizations rooted in the unique landscapes of the Northwest Territories.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>High-resolution terrain and satellite data visualization (e.g., Logan Earth)</li>
            <li>Remote sensing analysis for environmental monitoring and land use planning</li>
            <li>Custom GIS solutions for Indigenous governments and northern communities</li>
            <li>Training and mentorship in geospatial technology and data sovereignty</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Featured Project: Logan Earth</h2>
          <p className="mb-4">
            Logan Earth is a custom-built Earth viewer designed specifically for the Northwest Territories. Integrating ArcticDEM,
            Esri imagery, and open data layers, it brings never-before-seen clarity to community planning, land use, and permafrost research.
          </p>
          <div className="bg-gray-100 border rounded-xl overflow-hidden shadow-md">
            <img
              src="/assets/logan-earth.jpg"
              alt="Logan Earth screenshot"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-600 italic">
                Example view of Logan Earth showing high-resolution terrain layers and imagery for community planning in the North.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-800">
            My name is Logan, and I was born and raised in Yellowknife. I'm Métis, a geomatics analyst, and a relentless believer in the North's
            ability to lead its own future. I created Northern Made Maps as a way to push back against gatekeeping, to bring tools like Logan Earth
            into the hands of northern communities, and to support others who want to build better with data. Whether I'm in the field, behind the screen,
            or training others, I’m doing it with the belief that the land and people of the North deserve tools made with them in mind.
          </p>
        </section>

        <section className="mb-16 text-center bg-gray-100 border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Let’s build something together</h2>
          <p className="mb-4">Interested in working together or learning more?</p>
          <a
            href="mailto:info@northernmademaps.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800"
          >
            Contact Me
          </a>
        </section>

        <footer className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Northern Made Maps. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
