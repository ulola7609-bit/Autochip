import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import './style.css'
const Root = window.location.pathname.startsWith('/admin') ? Admin : App
createRoot(document.getElementById('root')).render(<React.StrictMode><Root /></React.StrictMode>)
if ('serviceWorker' in navigator && import.meta.env.PROD) { window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {})) }
