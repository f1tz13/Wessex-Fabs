
export default function Contact() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Request a Quote</h1>
        <p className="text-steel max-w-3xl mb-6">Tell us about your project and we’ll get back to you within one business day.</p>
        <form action="https://formspree.io/f/xbldzgey" method="POST" className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="block text-sm mb-1">Name</label><input name="name" required className="w-full rounded-xl border border-gray-300 px-3 py-2"/></div>
            <div><label className="block text-sm mb-1">Email</label><input type="email" name="email" required className="w-full rounded-xl border border-gray-300 px-3 py-2"/></div>
          </div>
          <div><label className="block text-sm mb-1">Message</label><textarea name="message" rows="5" className="w-full rounded-xl border border-gray-300 px-3 py-2"/></div>
          <button className="btn w-fit">Send</button>
        </form>
        <p className="text-xs text-steel mt-3">(* Temporary form endpoint; we can switch to your email later.)</p>
      </div>
      <div className="card p-6">
        <h2 className="font-semibold mb-2">Our Details</h2>
        <p className="text-steel">Phone: &lt;&lt;REPLACE_PHONE&gt;&gt;<br/>Email: &lt;&lt;REPLACE_EMAIL&gt;&gt;</p>
      </div>
    </section>
  )
}
