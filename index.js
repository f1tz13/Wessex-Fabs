
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="bg-charcoal text-white rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl">Architectural & Structural Steelwork, Done Right.</h1>
        <p className="mt-5 max-w-2xl text-lightsteel">Since 1983, we deliver design, fabrication and installation across the South Coast and London.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="btn">Request a Quote</Link>
          <Link href="/projects" className="inline-flex items-center px-5 py-3 rounded-2xl border border-white/20">View Projects</Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:'Staircases', c:'Feature stairs, cores and escapes with compliant detailing.'},
            {t:'Balustrades & Handrails', c:'Durable, compliant guarding and handrails.'},
            {t:'Structural Steelwork', c:'Frames, beams and secondary steel with full traceability.'},
            {t:'Mezzanines & Platforms', c:'Catwalks, plant decks and access platforms.'},
            {t:'On‑Site Installation', c:'Planned lifts and certified on‑site welding.'},
            {t:'Design & Detailing', c:'3D models and drawings for efficient manufacture.'}
          ].map(s => (
            <article key={s.t} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
              <p className="text-steel">{s.c}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
