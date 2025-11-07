export default function Home(){
  return (
    <main className="container py-10">
      <h1 className="text-4xl font-semibold">Architectural & Structural Steelwork</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Since 1983, delivering design, fabrication and installation across the South Coast & London.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="/contact" className="btn">Request a Quote</a>
        <a href="/projects" className="inline-flex items-center px-5 py-3 rounded-2xl border">View Projects</a>
      </div>
    </main>
  );
}
