/**
 * Blush Ledger: a white-and-pink, editorial accountant portfolio that centers US CMA credibility, international reporting work, and a single clear conversation CTA.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

const assets = {
  mark: `${assetBase}images/eliza-cesista-ec-monogram.png`,
  hero: `${assetBase}images/eliza-cesista-studio-header-hair-refined.png`,
  crossBorder: `${assetBase}images/eliza-cesista-crossborder-ledger.jpg`,
  systems: `${assetBase}images/eliza-cesista-systems-abstract.jpg`,
};

const expertise = [
  {
    number: "01",
    icon: BarChart3,
    title: "Reporting & close",
    body: "Disciplined period-end cycles, multi-entity reporting, multi-currency consolidation, reconciliations, and executive-ready financial packages.",
    tags: ["Month-end close", "EU client entities", "Consolidation"],
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Tax & compliance",
    body: "Practical support for UAE VAT and corporate tax filings, audit readiness, financial-statement integrity, and control-focused accounting operations.",
    tags: ["UAE VAT", "Corporate tax", "External audit"],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Systems & controls",
    body: "Process standardization and ERP configuration that turn manual routines into repeatable, audit-ready finance workflows.",
    tags: ["Oracle NetSuite", "SAP", "Zoho Books"],
  },
];

const timeline = [
  {
    period: "Sep 2025 to Present",
    role: "Senior Accountant",
    company: "NHBC Accounting & Bookkeeping LLC",
    location: "Dubai, UAE",
    detail:
      "Leads a multi-client accounting portfolio from onboarding and full-cycle accounting through UAE VAT, corporate tax, reporting, and team mentorship.",
  },
  {
    period: "Jun 2021 to Aug 2025",
    role: "General Accounting Specialist",
    company: "Arcadis Consulting Middle East Limited",
    location: "Makati, Philippines",
    detail:
      "Progressed from Analyst to Specialist while directing close activities, automating Oracle NetSuite workflows, and owning multi-currency consolidation for European client entities in collaboration with international stakeholders.",
    featured: true,
  },
  {
    period: "Feb 2021 to Jun 2021",
    role: "General Accountant",
    company: "ATC Healthcare International Corp.",
    location: "Taguig, Philippines",
    detail:
      "Supervised core accounting operations, led account closures, prepared audit schedules, and resolved reconciliation discrepancies.",
  },
  {
    period: "Oct 2019 to Jan 2021",
    role: "Assurance Associate",
    company: "PwC Philippines, Isla Lipana & Co.",
    location: "Makati, Philippines",
    detail:
      "Performed external-audit procedures, substantive testing, and internal-control evaluation for corporate client engagements.",
  },
];

const systems = ["SAP", "Oracle NetSuite", "QuickBooks", "Xero", "Zoho Books", "Tally Prime"];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Eliza Cesista home">
      <span className="brand-mark-wrap"><img src={assets.mark} alt="EC monogram" /><b aria-hidden="true">✓</b></span>
      <span>
        <strong>ELIZA CESISTA</strong>
        <em>CPA (PH) · US CMA · MBA</em>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:elizamariecesista@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="top" className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#credentials">Credentials</a>
            <a href="https://www.linkedin.com/in/eliza-cesista-cpa-us-cma-mba-9409711a3/" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
          <a className="header-cta" href="#contact">
            Discuss your reporting needs <ArrowUpRight size={15} />
          </a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {["About", "Expertise", "Experience", "Credentials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
                <ChevronRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <p className="eyebrow eyebrow-light"><span /> INTERNATIONAL ACCOUNTING & ADVISORY</p>
              <h1 id="hero-title">Financial clarity for decisions that <i>move business forward.</i></h1>
              <p className="hero-lede">
                Eliza Cesista is a US CMA and Philippines CPA with seven years of experience in close management, compliance, and multi-currency reporting for Philippine, UAE, and European client operations.
              </p>
              <div className="hero-actions">
                <a className="button button-orchid" href="#contact">Discuss your reporting needs <ArrowUpRight size={17} /></a>
                <a className="text-link text-link-light" href="#experience">View experience <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-credentials">
                <span>CPA <small>Philippines</small></span>
                <span>US CMA <small>USA</small></span>
                <span>MBA <small>PUP</small></span>
              </div>
            </div>
            <div className="hero-art reveal-delay" aria-label="Editorial finance professional artwork">
              <div className="hero-number">07<span>yrs</span></div>
              <img src={assets.hero} alt="Professional studio portrait of Eliza Cesista" />
              <div className="art-caption"><span>International accounting experience</span><strong>Philippines · UAE · Europe</strong></div>
              <div className="art-frame" />
            </div>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span>ELIZA MARIE CESISTA</span>
          </div>
        </section>

        <section className="proof-rail" aria-label="Professional credentials and experience highlights">
          <div><b>7</b><p>Years in progressive accounting roles</p></div>
          <div><b>US CMA</b><p>Management accounting credential</p></div>
          <div><b>EU</b><p>Multi-currency client-entity consolidation</p></div>
          <div><b>6</b><p>Core accounting systems</p></div>
        </section>

        <section id="about" className="about section-light">
          <div className="section-index">01 <span>/ About</span></div>
          <div className="about-content">
            <div>
              <p className="eyebrow">THE WORK BEHIND THE NUMBERS</p>
              <h2>Reliable reporting gives leaders the confidence to <i>act at the right moment.</i></h2>
            </div>
            <div className="about-copy">
              <p>Reliable reporting does more than close the books. It helps leaders understand performance, manage risk, and make timely decisions with confidence.</p>
              <p>Eliza combines technical accounting depth with international coordination and hands-on systems fluency. Her work covers period-end close, tax compliance, client onboarding, internal controls, and process improvement.</p>
              <a className="text-link" href="#credentials">Explore credentials <ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="about-statement"><CircleDollarSign size={22} /><span>Accurate records turn financial detail into practical direction.</span></div>
        </section>

        <section id="expertise" className="expertise section-dark">
          <div className="section-header section-header-dark">
            <div className="section-index">02 <span>/ Expertise</span></div>
            <div><p className="eyebrow eyebrow-light">WHAT ELIZA BRINGS TO THE TABLE</p><h2>Structured thinking for complex finance operations.</h2></div>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ number, icon: Icon, title, body, tags }) => (
              <article className="expertise-card" key={number}>
                <div className="card-top"><span>{number}</span><Icon size={23} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section-light">
          <div className="section-index">03 <span>/ Experience</span></div>
          <div className="experience-intro">
            <p className="eyebrow">A CAREER BUILT ACROSS ACCOUNTING, AUDIT & ADVISORY</p>
            <h2>Each role expanded the scope of <i>financial control.</i></h2>
          </div>
          <div className="experience-layout">
            <div className="timeline">
              {timeline.map((item) => (
                <article className={`timeline-item ${item.featured ? "timeline-featured" : ""}`} key={item.company}>
                  <div className="timeline-dot" /><div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div>
                  <div className="timeline-main">
                    <p className="timeline-role">{item.role}</p><h3>{item.company}</h3><p>{item.detail}</p>
                    {item.featured && <span className="feature-chip"><Check size={14} /> European client entities</span>}
                  </div>
                </article>
              ))}
            </div>
            <figure className="ledger-figure">
              <img src={assets.crossBorder} alt="Editorial still life of accounting ledger and laptop for cross-border reporting" />
              <figcaption><span>Arcadis experience</span><strong>International reporting, thoughtfully controlled.</strong></figcaption>
            </figure>
          </div>
        </section>

        <section className="systems section-dark">
          <div className="systems-copy"><div className="section-index">04 <span>/ Systems</span></div><p className="eyebrow eyebrow-light">SYSTEMS LITERACY, APPLIED</p><h2>Systems deliver value when the process behind them is <i>sound.</i></h2><p>Eliza improves finance workflows across core accounting platforms, turning business needs into clearer and more reliable reporting.</p><div className="system-list">{systems.map((system) => <span key={system}>{system}</span>)}</div></div>
          <figure className="systems-art"><img src={assets.systems} alt="Abstract editorial artwork representing integrated accounting systems and process improvement" /><figcaption>Standardized process / audit-ready control</figcaption></figure>
        </section>

        <section id="credentials" className="credentials section-light">
          <div className="section-index">05 <span>/ Credentials</span></div>
          <div className="credential-heading"><p className="eyebrow">PROFESSIONAL FOUNDATION</p><h2>Credentials that support <i>clear, accountable work.</i></h2></div>
          <div className="credential-grid">
            <article className="credential-card credential-primary"><span className="credential-seal">CMA</span><p className="card-label">MANAGEMENT ACCOUNTING</p><h3>US Certified Management Accountant</h3><p>Institute of Management Accountants, USA · July 2022</p><strong>US CMA</strong></article>
            <article className="credential-card"><span className="credential-seal">CPA</span><p className="card-label">PUBLIC ACCOUNTANCY</p><h3>Certified Public Accountant</h3><p>Professional Regulation Commission, Philippines · October 2019</p><strong>CPA (PH)</strong></article>
            <article className="credential-card"><span className="credential-seal">MBA</span><p className="card-label">BUSINESS LEADERSHIP</p><h3>Master of Business Administration</h3><p>Polytechnic University of the Philippines · Completed March 2026</p><strong>MBA</strong></article>
          </div>
          <div className="education-note"><BriefcaseBusiness size={19} /><span><b>Academic distinction:</b> BS Accountancy, Magna Cum Laude · Lyceum of the Philippines University</span></div>
        </section>

        <section className="perspectives section-soft">
          <div className="section-index">06 <span>/ Perspectives</span></div>
          <div className="perspectives-top"><div><p className="eyebrow">PRACTICAL FINANCE THINKING</p><h2>Clarity is built in the <i>details.</i></h2></div><p>A selection of working principles that guide thoughtful, well-controlled accounting operations.</p></div>
          <div className="perspective-grid">
            {[
              ["01", "The audit-ready close", "A dependable close is more than a deadline; it is a sequence of clear ownership, reconciled information, and reviewable decisions."],
              ["02", "Make the process repeatable", "Standardization creates capacity. When routine controls are built into the workflow, finance teams can spend more time understanding what the numbers mean."],
              ["03", "Start onboarding with context", "The best accounting setup begins by understanding how the business really operates before configuring the chart of accounts or assigning a task."],
            ].map(([num, title, copy]) => <article className="perspective-card" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={18} /></article>)}
          </div>
        </section>

        <section id="contact" className="contact section-dark">
          <div className="contact-intro"><div className="section-index">07 <span>/ Contact</span></div><p className="eyebrow eyebrow-light">START A PROFESSIONAL CONVERSATION</p><h2>Bring clarity to your next <i>finance decision.</i></h2><p>Need a stronger close, clearer reporting, or a more controlled accounting process? Send a short note to start the right conversation.</p><div className="contact-details"><a href="mailto:elizamariecesista@gmail.com"><Mail size={17} /> elizamariecesista@gmail.com</a><a href="tel:+639272337541"><Phone size={17} /> +63 927 233 7541</a><a href="https://www.linkedin.com/in/eliza-cesista-cpa-us-cma-mba-9409711a3/" target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a></div><p className="relocation"><span /> Dubai, UAE · Relocating permanently to Cavite, Philippines in November 2026</p></div>
          <form className="contact-form" onSubmit={handleContact}>
            <label><span>Your name</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="How should Eliza address you?" /></label>
            <label><span>Email address</span><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
            <label><span>How can Eliza help?</span><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the conversation you’d like to have." /></label>
            <button className="button button-orchid" type="submit">Send your message <ArrowUpRight size={17} /></button><p className="form-note">This opens your email app; your message stays on your device until you send it.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer"><Brand /><p>Built for clarity, control, and forward motion.</p><a href="https://www.linkedin.com/in/eliza-cesista-cpa-us-cma-mba-9409711a3/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a><a href="#top">Back to top <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}
