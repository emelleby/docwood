// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route } from '@redwoodjs/router/Route'
import { Router } from '@redwoodjs/router/RscRouter'
import { Set } from '@redwoodjs/router/Set'

import DocsLayout from 'src/layouts/DocsLayout/DocsLayout'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DocsLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/docs" page={DocsRendererPage} name="docsHome" />
        <Route path="/docs/{path...}" page={DocsRendererPage} name="docs" />
      </Set>
      <Route path="/debug" page={DebugPage} name="debug" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
