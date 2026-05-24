import { useState } from 'react';
import RevealSection from '../RevealSection/RevealSection';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:mouhamadoumouhtadandiaye@esp.sn?subject=Contact Portfolio - ${form.name}&body=${encodeURIComponent(form.message + '\n\nDe: ' + form.name + ' (' + form.email + ')')}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <RevealSection id="contact" className="contact" animation="fade-up">
      <div className="contact-container">
        <h2 className="section-title">
          Me <span className="text-gradient">Contacter</span>
        </h2>
        <p className="section-subtitle">
          Discutons de vos projets ! N&apos;hésitez pas à m&apos;écrire
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card stagger-item" style={{ '--s-index': 0 }}>
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:mouhamadoumouhtadandiaye@esp.sn">mouhamadoumouhtadandiaye@esp.sn</a>
              </div>
            </div>
            <div className="contact-info-card stagger-item" style={{ '--s-index': 1 }}>
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/mouhtada-1829" target="_blank" rel="noopener noreferrer">mouhtada-1829</a>
              </div>
            </div>
            <div className="contact-info-card stagger-item" style={{ '--s-index': 2 }}>
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Localisation</h4>
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Votre message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" style={{ textTransform: 'none', fontSize: '0.95rem' }}>
              {sent ? 'Message envoyé !' : 'Envoyer le message'}
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </RevealSection>
  );
};

export default Contact;
