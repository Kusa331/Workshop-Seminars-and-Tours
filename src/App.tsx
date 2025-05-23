import React, { useState, useEffect } from 'react';
import './App.css';
import profilePic from './assets/ken.jpg';
import introPic from './assets/first.jpg';  
import introPic2 from "./assets/second.jpg";
import introPic3 from "./assets/third.jpg"
import introPic4 from "./assets/fourth.jpg"


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reflectionText, setReflectionText] = useState('');
  const [reflections, setReflections] = useState(() => {
    const saved = localStorage.getItem('reflections');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('reflections', JSON.stringify(reflections));
  }, [reflections]);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function addReflection() {
    if (!reflectionText.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: reflectionText.trim(),
      date: new Date().toLocaleString(),
    };
    setReflections([newEntry, ...reflections]);
    setReflectionText('');
  }

  function deleteReflection(id: React.Key | null | undefined) {
    setReflections(reflections.filter((r: { id: React.Key | null | undefined; }) => r.id !== id));
  }

  return (
    <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <aside className="sidebar">
        <div className="profile">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>Ken's Journal</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#organizer">Organizer</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#reflection">Reflection</a></li>
            <li><a href="#conclusions">Conclusions</a></li>
          </ul>
        </nav>
      </aside>

      <button
        aria-label="Toggle sidebar"
        className={`hamburger ${sidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <span />
        <span />
        <span />
      </button>

      <main className="content">
        <section id="introduction">
          <h1>Introduction</h1>  
          <p>Welcome to my E-Journal! I'm Ken, Pursuing Bachelor of Science in Information Technology at the University of the Immaculate Conception,Davao City .</p>
        </section>

        <section id="organizer" style={{ padding: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Organizer</h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Speaker 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={introPic}
                alt="Ned Palacios"
                style={{
                  maxWidth: '190px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  marginBottom: '0.5rem',
                }}
              />
              <p>Speaker: Ned Palacios</p>
            </div>

            {/* Speaker 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={introPic2}
                alt="Lucas Castro"
                style={{
                  maxWidth: '190px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  marginBottom: '0.5rem',
                }}
              />
              <p>Speaker: Lucas Castro</p>
            </div>

            {/* Speaker 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={introPic3}
                alt="Cris John Manero"
                style={{
                  maxWidth: '190px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  marginBottom: '0.5rem',
                }}
              />
              <p>Speaker: Cris John Manero</p>
            </div>
          </div>

               {/* Speaker 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={introPic4}
                alt="Hizon Caja"
                style={{
                  maxWidth: '190px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  marginBottom: '0.5rem',
                }}
              />
              <p>Speaker: Hizon Caja</p>
            </div>
          
        </section>

        <section id="schedule">
          <h2>Schedule</h2>
          <p>This is the schedule overview of the workshop I attended.</p>
        </section>

        <section id="reflection">
          <h2>Reflection</h2>
          <textarea
            placeholder="Write your reflection..."
            value={reflectionText}
            onChange={e => setReflectionText(e.target.value)}
            rows={5}
          />
          <button onClick={addReflection} className="add-btn">Add Entry</button>

          <div className="reflection-list">
            {reflections.length === 0 && <p>No reflections yet.</p>}
            {reflections.map((entry: { id: React.Key | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
              <div key={entry.id} className="reflection-entry">
                <p>{entry.text}</p>
                <small>{entry.date}</small>
                <button
                  aria-label="Delete entry"
                  className="delete-btn"
                  onClick={() => deleteReflection(entry.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="conclusions">
          <h2>Conclusions</h2>
          <p>This journal helped me reflect on what I’ve learned during the workshop.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
