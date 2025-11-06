
export default function Projects() {
  const list = [
    { title: 'Transport Hub Stair Cores', sector: 'Transport', summary: 'Multi‑flight stair cores with glass balustrades, delivered in a live station.'},
    { title: 'Commercial Mezzanine & Plant Steel', sector: 'Commercial', summary: 'Fast‑track mezzanine with integrated guarding and access systems.'},
    { title: 'Heritage Gallery Balustrades', sector: 'Heritage', summary: 'Slimline steel and glass guarding sympathetic to listed fabric.'},
  ]
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Featured Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => (
          <article key={p.title} className="card p-6">
            <p className="text-xs uppercase tracking-wide text-steel">{p.sector}</p>
            <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
            <p className="text-steel mt-2">{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
