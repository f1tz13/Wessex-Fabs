
import Navbar from './Navbar';
import Footer from './Footer';

function Navbar(){return (
  <header className="border-b"><div className="container h-16 flex items-center justify-between">
    <a href="/"><img src="/logo.svg" alt="Wessex Fabrications" style={{height:32}}/></a>
    <nav className="flex gap-4 text-sm">
      <a href="/services">Services</a><a href="/projects">Projects</a>
      <a href="/about">About</a><a href="/contact">Contact</a>
    </nav>
  </div></header>
)}
function Footer(){return (<footer className="border-t mt-12"><div className="container py-6 text-sm text-gray-500">
  © {new Date().getFullYear()} Wessex Fabrications Ltd
</div></footer>)}

export default function Layout({children}){return (<div><Navbar/>{children}<Footer/></div>)}
