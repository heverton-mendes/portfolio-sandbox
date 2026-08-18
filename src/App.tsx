/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loading } from './components/layout/Loading';
import { ClickSpark } from './components/ui/ClickSpark';
import { I18nProvider } from './context/I18nContext';

const Home = lazy(() => import('./pages/Home'));
const ProjectsLayout = lazy(() => import('./pages/ProjectsLayout'));
const UsesLayout = lazy(() => import('./pages/UsesLayout'));
const ResumeLayout = lazy(() => import('./pages/ResumeLayout'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ClickSpark>
          <div className="flex flex-col min-h-screen bg-primary">
            <Navbar />
            <div className="flex-1">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsLayout />} />
                  <Route path="/uses" element={<UsesLayout />} />
                  <Route path="/resume" element={<ResumeLayout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
            <Footer />
          </div>
        </ClickSpark>
      </BrowserRouter>
    </I18nProvider>
  );
}

