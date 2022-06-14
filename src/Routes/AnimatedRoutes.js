import React from 'react'
import Homepage from '../Pages/Homepage/Homepage'
import ProjectPage from '../Pages/ProjectPage/ProjectPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}>
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Homepage />} />
        <Route path='/:title' element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
