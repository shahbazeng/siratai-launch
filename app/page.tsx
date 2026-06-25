"use client";
import { useState, useEffect } from "react";
import { BookOpen, Cpu, MessageSquare } from "lucide-react";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(""); // Success message state

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date("2026-06-26T00:00:00");
      const diff = target.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / 1000 / 60) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="hero-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/heavenly-bg.mp4" type="video/mp4" />
      </video>

      <div className="content-box">
        <div className="ayah-section">
          <p className="ayah">"فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ"</p>
          <p className="translation">"So ask the people of the message if you do not know." — (Quran 16:43)</p>
        </div>
        
        <h1 className="title">SIRAT <span className="gold-text">AI</span></h1>

        <div className="timer-grid">
          {Object.entries(timeLeft).map(([unit, val]) => (
            <div key={unit} className="timer-card">
              <div className="time-val">{val}</div>
              <div className="time-unit">{unit}</div>
            </div>
          ))}
        </div>

        <div className="grid-container">
          {[
            { icon: <BookOpen />, title: "Authentic Data" },
            { icon: <Cpu />, title: "AI Logic" },
            { icon: <MessageSquare />, title: "Smart Chat" },
            { icon: <span style={{fontSize:'20px'}}>📖</span>, title: "Quran Recite" }
          ].map((item, i) => (
            <div key={i} className="card">{item.icon}<h3>{item.title}</h3></div>
          ))}
        </div>

        <button className="btn" onClick={() => setShowModal(true)}>Signup SIRAT AI</button>
        <br />
        <a href="https://www.youtube.com/@DawahSirat" target="_blank" className="btn-yt-custom">
          <MessageSquare size={20} /> Subscribe to YouTube
        </a>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {status === "" ? (
              <>
                <h3>Join Sirat AI</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const res = await fetch("https://formspree.io/f/mzdlebrn", {
                    method: "POST", body: formData, headers: {'Accept': 'application/json'}
                  });
                  if (res.ok) setStatus("success");
                }}>
                  <input type="email" name="email" placeholder="Enter your email" required />
                  <button type="submit" className="btn">Register Now</button>
                </form>
              </>
            ) : (
              <div style={{ padding: '10px' }}>
                <h3 style={{ color: '#D4AF37' }}>JazakaAllah!</h3>
                <p style={{ fontStyle: 'italic', margin: '20px 0' }}>
                  "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ"
                </p>
                <p>We're Launching Sirat AI Soon InshaAllah.</p>
                <button className="btn" onClick={() => setShowModal(false)}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}