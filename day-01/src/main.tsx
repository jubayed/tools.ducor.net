import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Routes } from "react-router";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from './providers/theme.tsx';
import './css/index.css'
import { Route } from 'react-router';
import ReposPage from './pages/repos/index.tsx';
import RepoEditPage from './pages/repos/edit/index.tsx';

createRoot(document.body).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/repos" />} />
          <Route path='repos'>
              <Route index element={<ReposPage />} />
              <Route path="*" element={<RepoEditPage />} />
          </Route>
          <Route path='*' element={<Navigate to="/repos" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    {location.hostname.includes('.ducor.net')? (
      <Analytics />
    ): null}
  </StrictMode>,
)
