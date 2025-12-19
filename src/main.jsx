
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='775580731536-41hskb59ar3keghkh69tgmp6jr6icnq7.apps.googleusercontent.com'>
      <ShareContext>
          <App />
      </ShareContext>
       
     </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
