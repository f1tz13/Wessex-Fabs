
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Wessex Fabrications Ltd" className="h-8 w-auto"/>
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" className="btn">Request a Quote</Link>
          </nav>
        </div>
      </header>
      <main className="container py-10">{children}</main>
      <footer className="mt-16 border-t border-gray-200">
        <div className="container py-6 text-xs text-gray-500 flex justify-between">
          <p>© {new Date().getFullYear()} Wessex Fabrications Ltd</p>
          <p>Hampshire & London</p>
        </div>
      </footer>
    </div>
  )
}
