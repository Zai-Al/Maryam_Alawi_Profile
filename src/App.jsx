import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { motion } from 'framer-motion'
import profileImage from './profile_img.png'

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.33 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.11 20.45H3.56V9h3.56v11.45Z"
      />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [progress, setProgress] = useState(0)

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'impact', label: 'Impact' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Education & Languages' },
      { id: 'reachout', label: 'Reach Out' },
    ],
    [],
  )

  const linkedInUrl = 'https://www.linkedin.com/in/maryam-alsabea-74280b1a8/'

  const languages = useMemo(
    () => [
      {
        name: 'Arabic',
        level: 'Native Proficiency',
        overall: 100,
        skills: [
          { label: 'Reading', value: 100 },
          { label: 'Speaking', value: 100 },
          { label: 'Writing', value: 100 },
        ],
      },
      {
        name: 'English',
        level: 'Professional Proficiency',
        overall: 92,
        skills: [
          { label: 'Reading', value: 95 },
          { label: 'Speaking', value: 90 },
          { label: 'Writing', value: 91 },
        ],
      },
    ],
    [],
  )

  const experience = useMemo(
    () => [
      {
        role: 'SME Account Manager',
        company: 'Batelco by Beyon',
        period: 'June 2024 - Present',
        summary:
          'Leading portfolio communication, account growth strategy, and value-based commercial conversations for SME clients.',
      },
      {
        role: 'Customer Service Executive',
        company: 'Batelco by Beyon',
        period: 'Aug 2023 - June 2024',
        summary:
          'Managed high-stakes escalations and coordinated with technical teams to maintain trust and improve service quality.',
      },
      {
        role: 'Service Operations Manager',
        company: 'Delivery Hero (Hungerstation)',
        period: 'Sep 2021 - Aug 2023',
        summary:
          'Directed a 30 to 35 member team, optimized SLAs, and translated KPI insights into operational improvements.',
      },
      {
        role: 'Service Operations Specialist',
        company: 'Delivery Hero (Hungerstation)',
        period: 'Mar 2020 - Sep 2021',
        summary:
          'Orchestrated real-time communication across customers, vendors, and drivers to preserve service continuity.',
      },
      {
        role: 'Customer Care Representative',
        company: 'Delivery Hero (Carriage)',
        period: 'Oct 2019 - Mar 2020',
        summary:
          'Delivered multi-channel support with a strong focus on tone, complaint handling, and service recovery.',
      },
    ],
    [],
  )

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'impact', 'skills', 'contact', 'reachout']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.35, 0.6, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      const ratio = total > 0 ? Math.min(current / total, 1) : 0
      setProgress(ratio)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site-shell">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />

      <header className="site-header">
        <button className="brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Maryam Alawi
        </button>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={activeSection === item.id ? 'is-active' : ''}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="kicker">Strategic Communication and Client Growth</p>
            <h1>Maryam Sayed Husain Alawi</h1>
            <p className="lede">
              A reliability-driven commercial and operations leader who builds trust at scale,
              transforms customer moments into long-term partnerships, and communicates with
              clarity under pressure.
            </p>
            <div className="hero-cta">
              <button type="button" onClick={() => scrollToSection('experience')}>
                Explore Experience
                <ArrowRight size={17} />
              </button>
              <button className="ghost" type="button" onClick={() => scrollToSection('reachout')}>
                Reach Out
              </button>
            </div>
          </motion.div>

          <motion.figure
            className="portrait"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img src={profileImage} alt="Portrait of Maryam Sayed Husain Alawi" />
          </motion.figure>
        </section>

        <section className="panel" id="about">
          <div className="section-title">
            <MessageCircle size={18} />
            <h2>Professional Summary</h2>
          </div>
          <p>
            Dynamic and results-driven professional with proven expertise across client
            engagement, commercial account management, and service operations leadership.
            Skilled in stakeholder communication, team development, and customer-centric
            messaging that enhances brand trust and business outcomes.
          </p>
          <p>
            Currently focused on integrating communication strategy, storytelling, and
            performance management into every stage of the customer journey.
          </p>
        </section>

        <section className="panel" id="experience">
          <div className="section-title">
            <BriefcaseBusiness size={18} />
            <h2>Professional Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                key={item.role + item.period}
                className="timeline-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="panel" id="impact">
          <div className="section-title">
            <Trophy size={18} />
            <h2>Awards and Achievements</h2>
          </div>
          <div className="impact-grid">
            <motion.div className="impact-card" whileHover={{ y: -6 }}>
              <h3>Highest Target Achiever</h3>
              <p>Batelco by Beyon</p>
              <span>2024, 2025, and 1st Half of 2026</span>
            </motion.div>
            <motion.div className="impact-card" whileHover={{ y: -6 }}>
              <h3>Best Team Leader of the Year</h3>
              <p>Hungerstation</p>
              <span>2022 and 2023</span>
            </motion.div>
          </div>
        </section>

        <section className="panel" id="skills">
          <div className="section-title">
            <Sparkles size={18} />
            <h2>Core Competencies</h2>
          </div>
          <div className="chips">
            {[
              'Enterprise Solution Sales',
              'Consultative Selling',
              'B2B Sales',
              'Account Management',
              'Customer Experience and Retention',
              'Business Development',
            ].map((skill) => (
              <motion.span key={skill} whileHover={{ scale: 1.06 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="panel" id="contact">
          <div className="section-title">
            <GraduationCap size={18} />
            <h2>Education and Languages</h2>
          </div>
          <div className="profile-grid">
            <article>
              <h3>Education</h3>
              <p>University of Bahrain</p>
              <p>Bachelor in Architecture (Expected 2026)</p>
            </article>

            <article>
              <div className="section-title section-title-inline">
                <Languages size={18} />
                <h3>Languages</h3>
              </div>
              <div className="language-list">
                {languages.map((language) => (
                  <div className="language-block" key={language.name}>
                    <div className="language-header">
                      <p className="language-name">{language.name}</p>
                      <p className="language-level">{language.level}</p>
                    </div>
                    <div className="meter">
                      <span style={{ width: `${language.overall}%` }} />
                    </div>
                    <div className="skill-rows">
                      {language.skills.map((skill) => (
                        <div className="skill-row" key={skill.label}>
                          <p>{skill.label}</p>
                          <p>{skill.value}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="panel" id="reachout">
          <div className="section-title">
            <MessageCircle size={18} />
            <h2>Reach Out</h2>
          </div>
          <div className="reachout-grid">
            <div className="reachout-row">
              <a className="reachout-item phone-item" href="tel:+97336880228" aria-label="Call +973 36880228">
                <Phone size={16} />
                <span>+973 36880228</span>
              </a>

              <a className="reachout-item" href="mailto:maryamsalsabea@gmail.com">
                <Mail size={16} />
                Reach Out via Email
              </a>

              {linkedInUrl && (
                <a className="reachout-item" href={linkedInUrl} target="_blank" rel="noreferrer">
                  <LinkedInIcon size={16} />
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Copyright © {new Date().getFullYear()} Maryam Sayed Husain Alawi. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
