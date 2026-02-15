import { Database, Zap, BarChart3, Globe, Github, Mail, FileText, Award } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">AD.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Analytics Engineer & Data Professional
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Building Scalable <br />
          <span className="text-blue-400">Data Solutions.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
         1.5+ years of experience building scalable data solutions across analytics, reporting automation, and business intelligence. I design performant data models and automate complex pipelines to drive measurable business impact
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
            View Projects
          </a>
          <a href="#resume" className="border border-slate-700 px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
            My Resume
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: "Data & Analytics", items: ["SQL", "BigQuery", "MySQL", "Excel/Sheets"], icon: <Database /> },
              { category: "Automation", items: ["n8n", "Make.com", "Apps Script", "Zoho Flows"], icon: <Zap /> },
              { category: "Visualization", items: ["Looker Studio", "Power BI", "Apache Superset"], icon: <BarChart3 /> },
              { category: "Programming", items: ["Python", ".NET", "C#"], icon: <Globe /> }
            ].map((skill, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="font-bold text-white mb-3">{skill.category}</h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  {skill.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* BEarthly Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">BEarthly</h3>
                <p className="text-slate-400 mb-6">
                 Designed a carbon footprint calculation system to analyze user activity data and track emissions trends. Integrated AQI APIs to enrich analytics and used Firebase to manage structured user data securely.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">Firebase</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Analytics</span>
                </div>
              </div>
            </div>

            {/* Transport Company Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Transport Management System</h3>
                <p className="text-slate-400 mb-6">
                 Developed a full-stack logistics platform using .NET and C# to manage fleet operations. Optimized the underlying MySQL database to improve data availability and reporting consistency.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">.NET</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Curriculum Vitae</h2>
          <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700 flex flex-col items-center">
            <FileText size={64} className="text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Resume_AartiDevkar_AE.pdf</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Download my full resume to view detailed experience in BigQuery optimization [cite: 13] and 
              automated lead lifecycle management[cite: 16].
            </p>
            <a 
              href="/Resume_AartiDevkar_AE.pdf" 
              download 
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/AartiDevkar" className="text-slate-400 hover:text-white transition"><Github /></a>
          <a href="mailto:aartideokar2003@gmail.com" className="text-slate-400 hover:text-white transition"><Mail /></a>
        </div>
        <p className="text-sm text-slate-500">© 2026 Aarti Devkar. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}