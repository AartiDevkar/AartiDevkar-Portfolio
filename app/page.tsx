import { Database, Cloud, LineChart, Mail, Github, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Cloud Solutions Architect & Data Engineer
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between raw data and scalable cloud infrastructure. 
          Specializing in AWS, BigQuery, and Business Process Automation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            View My Work
          </button>
          <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition">
            Contact Me
          </button>
        </div>
      </header>

      {/* Skills Grid */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Cloud className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-slate-600">AWS Certified Cloud Practitioner. Experienced in VPC, EC2, and S3 architecture.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Database className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-slate-600">Expertise in BigQuery, ClickHouse, and SQL optimization for large datasets.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <LineChart className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Automation & BI</h3>
              <p className="text-slate-600">Building automated workflows using AppScript, Make.com, and Looker Studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience/Projects Highlight */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Featured Experience</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition">
            <div>
              <h3 className="text-2xl font-bold">Business Process Development</h3>
              <p className="text-blue-600 font-medium">IIDE • Tech Team</p>
              <p className="mt-4 text-slate-600 max-w-xl">
                Optimizing CRM systems (Zoho, LeadSquared) and managing complex data reporting pipelines.
              </p>
            </div>
            <div className="mt-4 md:mt-0 italic text-slate-500">2025 - Present</div>
          </div>
        </div>
      </section>
    </div>
  );
}