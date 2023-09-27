import "./WorkCardStyles.css"

import React from 'react'

const Workcard = () => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container"></div>
    <div className="project-card">
        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="image"></img>
    </div> 
  </div>
}

export default Workcard