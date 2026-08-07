import { useState } from 'react'
import { company } from '../data/company.js'
import '../styles/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // Hook this up to your backend / email service (e.g. Formspree, Resend, your own API route).
    setSent(true)
  }

  return (
    <section className="section-tight contact-page">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="label">Contact</span>
          <h1>Let Us Quote Your Project</h1>
          <p className="lead">
            Send drawings, photographs or simply an area figure and we will return
            material options and an itemised quotation. Overseas buyers can request
            slab photographs, sample sets and container pricing.
          </p>

          <ul className="contact-methods">
            <li><span className="label-sm">Showroom &amp; Factory</span><span>{company.address}</span></li>
            <li><span className="label-sm">Telephone / WhatsApp</span><span>{company.phone}</span></li>
            <li><span className="label-sm">Email</span><span>{company.email}</span></li>
            <li><span className="label-sm">Website</span><span>{company.website}</span></li>
            <li><span className="label-sm">YouTube</span><span>{company.youtube}</span></li>
          </ul>

          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Message Us on WhatsApp
          </a>
        </div>

        <div className="form-side card">
          <h2>Send an Enquiry</h2>
          {sent ? (
            <div className="sent-state">
              <span className="sent-icon">✓</span>
              <h3>Message received</h3>
              <p>Our team will reach out to you shortly at {form.email || 'your email'}.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field">
                <label htmlFor="name">Name *</label>
                <input id="name" required value={form.name} onChange={update('name')} placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">WhatsApp Number *</label>
                <input id="whatsapp" required value={form.whatsapp} onChange={update('whatsapp')} placeholder="+92 3XX XXXXXXX" />
              </div>
              <div className="field">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" rows={5} value={form.message} onChange={update('message')} placeholder="Drawings, area figure, material preference..." />
              </div>
              <button type="submit" className="btn btn-gold btn-block">Send Enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
