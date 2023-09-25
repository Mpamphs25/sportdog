import { createInertiaApp } from '@inertiajs/react'
import { createRoot,hydrateRoot } from 'react-dom/client'

// import route from 'ziggy'
// import { Ziggy } from './ziggy';
import Layout from './Pages/Layout'


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let  page = pages[`./Pages/${name}.jsx`]
    
    // page.default.layout = page.default.layout || (page => <Layout children={page} />)
    page.default.layout = page.default.layout || (page => <Layout children={page}  />) 
    return page
  },
  setup({ el, App, props }) {
    hydrateRoot(el).render(<App {...props} />)
  },
})


