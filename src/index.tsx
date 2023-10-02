import React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import i18next from './translate/i18next'
// import LocaleContext from './translate/locales/LocaleContext'
import './index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'
import Loading from './Loading'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <LocaleContext.Provider value={{ locale, setLocale }}> */}
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    {/* </LocaleContext.Provider> */}
  </React.StrictMode>
)
reportWebVitals()

