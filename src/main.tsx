import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import 'dayjs/locale/es'

dayjs.locale('es')

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
