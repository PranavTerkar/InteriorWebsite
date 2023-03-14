import React from 'react'
import './styles/project.css'
function Projects() {
  return (
    <div style={{background:"#FCFFE7"}} className='project'>
    
         <div className="containers my-4">
         <h2>Latest Project</h2>
        <div className="grid m-0 p-0">
          <div className="item"><a href="#"><img className="img-fluid" src="http://via.placeholder.com/350x350" /></a></div>
          <div className="item">
            <a href="#"><h3>This issome text as part of the grid content</h3></a>
          </div>
          <div style={{background:"#FCFFE7"}} className="item"><a href="#"><img className="img-fluid" src="http://via.placeholder.com/350x350" /></a></div>
          <div style={{background:"#FCFFE7"}} className="item"><a href="#"><img className="img-fluid" src="http://via.placeholder.com/350x350" /></a></div>
          <div style={{background:"#FCFFE7"}} className="item"><a href="#"><img className="img-fluid" src="http://via.placeholder.com/350x350" /></a></div>
          <div style={{background:"#FCFFE7"}} className="item"><a href="#"><img className="img-fluid" src="http://via.placeholder.com/350x350" /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
