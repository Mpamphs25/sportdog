import { Link } from '@inertiajs/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
export default function Layout({ children }) {
//max-w-screen-xl mx-auto
  return (
   <>
      <header>
          <Navbar />
      </header>
      <main className='p-4   '>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}