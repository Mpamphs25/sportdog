import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
      let  page = pages[`./Pages/${name}.jsx`]
    //   return pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || (page => <Layout children={page}  />) 
    return page
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)


