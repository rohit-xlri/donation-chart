import React from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='chart'>
      <div className="container">
  <h1 className="level-1 rectangle">Foreign Source</h1>
  <ol className="level-2-wrapper">
    <li>
      <h2 className="level-2 rectangle">Indian Passport Holder</h2>
      <ol className="level-3-wrapper">
        <li>
          <div className="level-3 rectangle">Donation in <h3 className='bold-text'>INDIAN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">NO</h4>
            </li>
          </ol>
        </li>
        <li>
        <div className="level-3 rectangle">Donation in <h3 className='bold-text'>FOREIGN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">NO</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <h2 className="level-2 rectangle">Foreign Passport Holder</h2>
      <ol className="level-3-wrapper">
        <li>
        <div className="level-3 rectangle">Donation in <h3 className='bold-text'>INDIAN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">YES</h4>
            </li>
          </ol>
        </li>
        <li>
        <div className="level-3 rectangle">Donation in <h3 className='bold-text'>FOREIGN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">YES</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <h2 className="level-2 rectangle">OCI Card Holder</h2>
      <ol className="level-3-wrapper">
        <li>
        <div className="level-3 rectangle">Donation in <h3 className='bold-text'>INDIAN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">YES</h4>
            </li>
          </ol>
        </li>
        <li>
        <div className="level-3 rectangle">Donation in <h3 className='bold-text'>FOREIGN</h3> Currency</div>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">YES</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
</div>
</div>
    </>
  )
}

export default App
