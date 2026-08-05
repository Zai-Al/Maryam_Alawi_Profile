import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Mail,
  MessageCircle,
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
  const showBusinessImpact = false

  const navItems = useMemo(
    () => {
      const items = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'impact', label: 'Impact' },
        { id: 'skills', label: 'Skills' },
        { id: 'professional-focus', label: 'Professional Focus' },
        { id: 'contact', label: 'Education & Languages' },
        { id: 'reachout', label: 'Reach Out' },
      ]

      if (showBusinessImpact) {
        items.splice(3, 0, { id: 'business-impact', label: 'Business Impact' })
      }

      return items
    },
    [showBusinessImpact],
  )

  const linkedInUrl = 'https://www.linkedin.com/in/maryam-alsabea-74280b1a8/'

  const languages = useMemo(
    () => [
      {
        label: 'Arabic — Native Proficiency',
      },
      {
        label: 'English — Full Professional Proficiency',
      },
    ],
    [],
  )

  const businessImpactCards = useMemo(
    () => [
      {
        title: 'SME Portfolio Growth',
        note:
          'Placeholder content for verified SME portfolio size, account growth, renewal outcomes, and upselling results.',
      },
      {
        title: 'Sales Performance',
        note:
          'Placeholder content for verified sales targets, target achievement rates, rankings, and revenue contribution.',
      },
      {
        title: 'Operations Leadership',
        note:
          'Placeholder content for verified team size, SLA gains, productivity improvements, and development outcomes.',
      },
      {
        title: 'Customer Experience',
        note:
          'Placeholder content for verified retention, complaint resolution, escalation management, and service recovery.',
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
    const sectionIds = [
      'about',
      'experience',
      'impact',
      ...(showBusinessImpact ? ['business-impact'] : []),
      'skills',
      'professional-focus',
      'contact',
      'reachout',
    ]
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
  }, [showBusinessImpact])

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
            <p className="kicker">SME Account Management | B2B Sales | Client Growth</p>
            <h1>Maryam Sayed Husain Alawi</h1>
            <p className="lede">
              Commercial and operations professional with experience across telecommunications,
              SME account management, customer experience, and service operations. Maryam combines
              consultative selling, relationship management, and operational leadership to
              understand business needs, recommend suitable solutions, and build long-term client
              partnerships.
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
            Maryam has progressed from frontline customer care and service coordination into team
            leadership and SME account management. Her experience includes managing complex
            customer situations, leading teams of more than 30 employees, monitoring service
            performance, developing client relationships, and supporting commercial growth.
          </p>
          <p>
            Currently working as an SME Account Manager at Batelco by Beyon, she focuses on
            understanding business requirements, recommending relevant solutions, and
            strengthening long-term partnerships through clear communication and dependable account
            support.
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

        {showBusinessImpact && (
          <section className="panel" id="business-impact">
            <div className="section-title">
              <BriefcaseBusiness size={18} />
              <h2>Business Impact</h2>
            </div>
            <div className="impact-grid">
              {businessImpactCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="impact-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.note}</p>
                  {/* TODO: Replace with Maryam's verified result */}
                  {/* TODO: Replace with Maryam's verified result */}
                </motion.article>
              ))}
            </div>
          </section>
        )}

        <section className="panel" id="skills">
          <div className="section-title">
            <Sparkles size={18} />
            <h2>Core Competencies</h2>
          </div>
          <div className="chips">
            {[
              'SME Account Management',
              'Consultative Selling',
              'B2B Sales',
              'Business Development',
              'Client Relationship Management',
              'Customer Experience and Retention',
              'Commercial Negotiation',
              'Team Leadership and Coaching',
              'KPI and SLA Management',
              'Stakeholder Management',
              'Escalation and Conflict Resolution',
              'Cross-functional Collaboration',
            ].map((skill) => (
              <motion.span key={skill} whileHover={{ scale: 1.06 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="panel" id="professional-focus">
          <div className="section-title">
            <Sparkles size={18} />
            <h2>Professional Focus</h2>
          </div>
          <p>
            Maryam is particularly interested in opportunities involving strategic account
            management, B2B client growth, commercial relationship development, customer
            experience, and customer-focused leadership.
          </p>
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
                  <div className="language-block" key={language.label}>
                    <p className="language-line">{language.label}</p>
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
