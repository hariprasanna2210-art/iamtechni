import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import "../iamtechni.css";
import { initIamtechni } from "../lib/iamtechni-motion";
import logo from "../assets/logo.png";
import work01 from "../assets/work-01.jpg";
import work02 from "../assets/work-02.jpg";
import work03 from "../assets/work-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iamtechni — Technology in Motion" },
      {
        name: "description",
        content:
          "iamtechni is a technology studio building software, cloud, data and AI systems that move businesses forward.",
      },
      { property: "og:title", content: "iamtechni — Technology in Motion" },
      {
        property: "og:description",
        content:
          "A future-facing technology studio. We design and engineer the systems that move businesses forward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const RAIL = [
  { n: "01", label: "Origin", target: "origin" },
  { n: "02", label: "Position", target: "position" },
  { n: "03", label: "Capability", target: "capability" },
  { n: "04", label: "System", target: "system" },
  { n: "05", label: "Work", target: "work" },
  { n: "06", label: "Architecture", target: "architecture" },
  { n: "07", label: "Fields", target: "fields" },
  { n: "08", label: "Contact", target: "contact" },
];

const CAPS = [
  {
    key: "digital",
    title: "Digital",
    desc: "End-to-end product experiences — from the first interaction sketch to a shipped, measured, evolving interface.",
    tags: ["Product strategy", "Interface systems", "Prototyping", "Design engineering"],
  },
  {
    key: "software",
    title: "Software",
    desc: "Architecture and engineering for systems that carry real load, real money and real consequences.",
    tags: ["Architecture", "Engineering", "Platforms", "APIs", "Automation"],
  },
  {
    key: "cloud",
    title: "Cloud",
    desc: "Infrastructure designed as a product: reproducible, observable, and boring in the best possible way.",
    tags: ["Landing zones", "Kubernetes", "Cost engineering", "Observability"],
  },
  {
    key: "data",
    title: "Data",
    desc: "Pipelines and models that turn operational noise into decisions leadership can actually defend.",
    tags: ["Warehousing", "Streaming", "Governance", "Decision layers"],
  },
  {
    key: "ai",
    title: "AI",
    desc: "Applied intelligence with guardrails — retrieval, agents and evaluation built into the product, not bolted on.",
    tags: ["Retrieval", "Agents", "Evaluation", "MLOps"],
  },
];

const SYSTEM = [
  { n: "01", h: "Idea", p: "We interrogate the problem before touching a solution. Constraints first." },
  { n: "02", h: "Design", p: "Interfaces, data contracts and architecture drawn as one continuous system." },
  { n: "03", h: "Build", p: "Small increments, real environments, production quality from the first commit." },
  { n: "04", h: "Scale", p: "Load, cost and reliability engineered as deliberate product features." },
  { n: "05", h: "Evolve", p: "Instrumented systems that keep improving long after launch day." },
];

const WORK = [
  {
    n: "01",
    title: "Meridian Core",
    tags: ["Platform", "Cloud", "Data"],
    copy: "A settlement platform rebuilt from a nightly batch into a streaming core — reconciliation dropped from hours to seconds.",
    img: work01,
  },
  {
    n: "02",
    title: "Atlas Field",
    tags: ["Product", "Design", "IoT"],
    copy: "One operator interface for twelve thousand field devices, designed for gloves, glare and no signal.",
    img: work02,
  },
  {
    n: "03",
    title: "Verity Layer",
    tags: ["AI", "Governance", "Software"],
    copy: "A retrieval and evaluation layer that made an enterprise knowledge base defensible to its own risk committee.",
    img: work03,
  },
];

const NODES = [
  { x: 12, y: 26, label: "Cloud", info: "Reproducible landing zones, policy as code, and cost visibility from day one." },
  { x: 30, y: 62, label: "Infrastructure", info: "Self-healing runtime foundations with observability designed in, never added later." },
  { x: 46, y: 18, label: "Software", info: "Domain-driven services with explicit contracts and honest failure modes." },
  { x: 58, y: 74, label: "Data", info: "One lineage-tracked path from event to decision, governed end to end." },
  { x: 72, y: 34, label: "AI", info: "Retrieval, agents and evaluation harnesses wired into the product loop." },
  { x: 84, y: 66, label: "APIs", info: "Versioned, documented, rate-aware interfaces that partners can build a business on." },
  { x: 94, y: 24, label: "Experience", info: "The surface where all of the above becomes something a person can trust." },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [4, 6],
  [5, 6],
  [1, 2],
];

const INDUSTRIES = [
  { label: "Health", tone: "#13d6b0", say: "Clinical systems where latency, privacy and clarity are not negotiable." },
  { label: "Finance", tone: "#2868d8", say: "Movement of money, modelled precisely, audited continuously." },
  { label: "Retail", tone: "#24a9d2", say: "Commerce that behaves identically on a phone, a counter and an API." },
  { label: "Education", tone: "#d4a83e", say: "Learning platforms built for scale spikes and very short attention spans." },
  { label: "Manufacturing", tone: "#193b8f", say: "Factory-floor telemetry translated into decisions before the shift ends." },
  { label: "Enterprise", tone: "#24a9d2", say: "Legacy estates modernised without pausing the business for a year." },
];

const VOICES = [
  {
    quote: "They didn't just solve the problem. They changed how we thought about it.",
    who: "Group CTO",
    org: "Financial infrastructure group",
  },
  {
    quote: "Six weeks in, we had a system in production our previous vendor had spent a year describing.",
    who: "VP Engineering",
    org: "Industrial technology",
  },
  {
    quote: "The architecture is the thing that keeps paying us back. It still holds.",
    who: "Head of Platform",
    org: "National health network",
  },
];

const STATEMENT =
  "We don't just build software. We build the systems that move businesses forward.";

function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const dispose = initIamtechni(rootRef.current);
    return dispose;
  }, []);

  return (
    <div className="it" ref={rootRef}>
      {/* ---------- loader ---------- */}
      <div className="it-loader" aria-hidden="true">
        <img className="it-loader__logo" src={logo} alt="iamtechni" />
        <div className="it-loader__wipe" />
      </div>

      {/* ---------- cursor ---------- */}
      <div className="it-cursor" aria-hidden="true">
        <span className="it-cursor__dot" />
        <span className="it-cursor__label" />
      </div>

      {/* ---------- brand + instrument nav ---------- */}
      <a className="it-brand" href="#origin" data-scroll data-cursor="hover" aria-label="iamtechni, back to top">
        <img className="it-brand__logo" src={logo} alt="iamtechni" />
      </a>

      <nav className="it-rail" aria-label="Section navigation">
        {RAIL.map((r) => (
          <button
            key={r.target}
            type="button"
            className="it-rail__item"
            data-target={r.target}
            data-cursor="hover"
            aria-current="false"
          >
            <span className="it-rail__label">{r.label}</span>
            <span className="it-rail__num">{r.n}</span>
            <span className="it-rail__tick" aria-hidden="true" />
          </button>
        ))}
      </nav>

      <button className="it-menu-btn" type="button" aria-expanded="false" aria-label="Open navigation">
        <span />
        <span />
      </button>

      <div className="it-overlay" data-open="false">
        {RAIL.map((r) => (
          <a key={r.target} href={`#${r.target}`}>
            <small>{r.n}</small>
            {r.label}
          </a>
        ))}
      </div>

      <main>
        {/* ================= 01 HERO ================= */}
        <section className="it-hero" id="origin">
          <div className="it-hero__field" aria-hidden="true">
            <span className="it-hero__glow" />
            <canvas id="it-field" />
            <i className="it-bar it-hero__bar it-hero__bar--b" />
            <i className="it-bar it-hero__bar it-hero__bar--a" />
            <i className="it-bar it-hero__bar it-hero__bar--c" />
            <span className="it-hero__gold" />
          </div>

          <h1 className="it-hero__title it-giant">
            <span className="it-hero__line it-hero__line--1">
              <span>Technology</span>
            </span>
            <span className="it-hero__line it-hero__line--2">
              <span className="it-accent">in motion</span>
            </span>
            <span className="it-hero__line it-hero__line--3">
              <span>
                we build what&rsquo;s next<span className="it-dot" />
              </span>
            </span>
          </h1>

          <div className="it-hero__meta">
            <p className="it-hero__note">
              iamtechni is a technology studio. We design, engineer and operate the systems
              organisations run on — software, cloud, data, intelligence.
            </p>
            <div className="it-hero__scroll it-mono">
              <i aria-hidden="true" />
              Scroll to enter
            </div>
          </div>
        </section>

        {/* ================= 02 STATEMENT ================= */}
        <section className="it-section it-dark it-statement" id="position">
          <p className="it-eyebrow it-mono">02 — Position</p>
          <h2 className="it-mid it-statement__body" style={{ marginTop: "clamp(1.5rem,5vh,3rem)" }}>
            {STATEMENT.split(" ").map((w, i) => (
              <span className="it-clip" key={`${w}-${i}`} style={{ display: "inline-block" }}>
                <span className="it-statement__word">{w}&nbsp;</span>
              </span>
            ))}
          </h2>
          <p className="it-statement__aside">
            Founded by engineers who were tired of decks. We work in small senior teams, in the
            open, against production from week one — because a system that has never met reality is
            only an opinion.
          </p>
        </section>

        {/* ================= 03 CAPABILITY FIELD ================= */}
        <section className="it-section it-dark it-cap" id="capability">
          <p className="it-eyebrow it-mono">03 — Capability field</p>
          <div className="it-cap__grid">
            <div className="it-cap__list" role="tablist" aria-label="Capabilities">
              {CAPS.map((c, i) => (
                <button
                  key={c.key}
                  type="button"
                  role="tab"
                  className="it-cap__item"
                  aria-selected={i === 0}
                  data-cursor="view"
                  data-cursor-label="Explore"
                  data-payload={JSON.stringify({ title: c.title, desc: c.desc, tags: c.tags })}
                >
                  <span className="it-mono">{`0${i + 1}`}</span>
                  <span>{c.title}</span>
                </button>
              ))}
            </div>

            <div className="it-cap__panel" aria-live="polite">
              <h3 className="it-mono" id="cap-title">
                {CAPS[0]!.title}
              </h3>
              <p className="it-cap__desc" id="cap-desc">
                {CAPS[0]!.desc}
              </p>
              <ul className="it-cap__tags" id="cap-tags">
                {CAPS[0]!.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="it-cap__visual" aria-hidden="true">
                {Array.from({ length: 14 }).map((_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 04 SYSTEM ================= */}
        <section className="it-section it-system" id="system">
          <p className="it-eyebrow it-mono">04 — The iamtechni system</p>
          <div className="it-system__stage">
            <span className="it-system__travel" aria-hidden="true" />
            {SYSTEM.map((s) => (
              <div className="it-system__row" key={s.n} data-on="false">
                <span className="it-mono">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <i aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        {/* ================= 05 WORK ================= */}
        <section className="it-work it-dark" id="work" aria-label="Selected work">
          <div className="it-work__track">
            <article className="it-work__panel">
              <div className="it-work__lead">
                <p className="it-eyebrow it-mono">05 — Selected work</p>
                <h2 className="it-mid" style={{ marginTop: "1.2rem" }}>
                  Three systems<span className="it-dot" /> still running
                </h2>
              </div>
            </article>

            {WORK.map((p) => (
              <article className="it-work__panel" key={p.n} data-cursor="view" data-cursor-label="View">
                <div>
                  <p className="it-mono it-work__index">{p.n}</p>
                  <h3 className="it-work__title">{p.title}</h3>
                  <p className="it-mono it-work__tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                  <p className="it-work__copy">{p.copy}</p>
                </div>
                <figure className="it-work__figure">
                  <img src={p.img} alt={`${p.title} visual`} loading="lazy" width={1280} height={1600} />
                </figure>
              </article>
            ))}
          </div>
        </section>

        {/* ================= 06 ARCHITECTURE ================= */}
        <section className="it-section it-net" id="architecture">
          <p className="it-eyebrow it-mono">06 — Architecture</p>
          <h2 className="it-mid it-reveal" style={{ marginTop: "1.2rem", maxWidth: "18ch" }}>
            One system, seven layers
          </h2>
          <div className="it-net__stage">
            <svg className="it-net__svg" aria-hidden="true">
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  className="it-net__line"
                  x1={`${NODES[a]!.x}%`}
                  y1={`${NODES[a]!.y}%`}
                  x2={`${NODES[b]!.x}%`}
                  y2={`${NODES[b]!.y}%`}
                />
              ))}
            </svg>
            {NODES.map((n, i) => (
              <button
                key={n.label}
                type="button"
                className="it-net__node"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                data-info={n.info}
                data-cursor="hover"
                aria-current={i === 0}
              >
                <b aria-hidden="true" />
                <small>{n.label}</small>
              </button>
            ))}
            <p className="it-net__readout" aria-live="polite">
              {NODES[0]!.info}
            </p>
          </div>
        </section>

        {/* ================= 07 FIELDS ================= */}
        <section className="it-section it-dark it-ind" id="fields">
          <span className="it-ind__aura" aria-hidden="true" />
          <p className="it-eyebrow it-mono">07 — Fields we work in</p>
          <div className="it-ind__wrap">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.label}
                type="button"
                className="it-ind__word"
                data-tone={ind.tone}
                data-say={ind.say}
                data-cursor="hover"
                aria-current={i === 0}
              >
                {ind.label}
              </button>
            ))}
          </div>
          <p className="it-ind__say" aria-live="polite">
            {INDUSTRIES[0]!.say}
          </p>
        </section>

        {/* ================= 08 NUMBERS ================= */}
        <section className="it-section it-num" aria-label="By the numbers">
          <div>
            <p className="it-eyebrow it-mono">08 — Measured</p>
            <p className="it-num__hero" data-count="100">
              <span>0</span>+
            </p>
            <p className="it-mono" style={{ marginTop: "1.4rem" }}>
              Systems shipped into production
            </p>
          </div>
          <div className="it-num__side">
            <div className="it-num__cell" data-count="10">
              <strong>
                <span>0</span>+
              </strong>
              <span className="it-mono">Years in motion</span>
            </div>
            <div className="it-num__cell" data-count="50">
              <strong>
                <span>0</span>+
              </strong>
              <span className="it-mono">Long-term partners</span>
            </div>
            <div className="it-num__cell" data-count="99">
              <strong>
                <span>0</span>%
              </strong>
              <span className="it-mono">Uptime we hold ourselves to</span>
            </div>
          </div>
        </section>

        {/* ================= 09 VOICES ================= */}
        <section className="it-section it-dark it-voice" aria-label="Client voices">
          <p className="it-eyebrow it-mono">09 — Voices</p>
          <div className="it-voice__stack">
            {VOICES.map((v, i) => (
              <div className="it-voice__item" key={v.who} data-on={i === 0}>
                <blockquote>&ldquo;{v.quote}&rdquo;</blockquote>
                <footer className="it-mono">
                  <span>{v.who}</span>
                  <span>/</span>
                  <span>{v.org}</span>
                </footer>
              </div>
            ))}
          </div>
          <div className="it-voice__nav" role="tablist" aria-label="Select testimonial">
            {VOICES.map((v, i) => (
              <button
                key={v.who}
                type="button"
                aria-current={i === 0}
                aria-label={`Testimonial ${i + 1}`}
                data-cursor="hover"
              />
            ))}
          </div>
        </section>

        {/* ================= 10 CONTACT ================= */}
        <section className="it-contact" id="contact">
          <div className="it-contact__trail" aria-hidden="true">
            <i />
          </div>
          <p className="it-eyebrow it-mono">10 — Next move</p>
          <h2 className="it-giant it-contact__lines" style={{ marginTop: "clamp(1.5rem,5vh,3rem)" }}>
            <span>Let&rsquo;s</span>
            <span className="it-accent">build</span>
            <span>
              something<span className="it-dot" />
            </span>
          </h2>
          <div className="it-contact__acts">
            <a className="it-contact__act" href="mailto:hello@iamtechni.com?subject=Starting%20a%20project" data-cursor="hover">
              Start a project <em aria-hidden="true">→</em>
            </a>
            <a className="it-contact__act" href="mailto:hello@iamtechni.com?subject=Talk%20to%20us" data-cursor="hover">
              Talk to us <em aria-hidden="true">→</em>
            </a>
            <a className="it-contact__act" href="mailto:hello@iamtechni.com" data-cursor="hover">
              hello@iamtechni.com <em aria-hidden="true">→</em>
            </a>
            <a className="it-contact__act" href="tel:+917418120053" data-cursor="hover">
              +91-7418120053 <em aria-hidden="true">→</em>
            </a>
            <a className="it-contact__act" href="https://wa.me/917418120053" target="_blank" rel="noreferrer" data-cursor="hover">
              WhatsApp <em aria-hidden="true">→</em>
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="it-foot">
        <div className="it-foot__bars" aria-hidden="true">
          {[38, 52, 64, 78, 92, 70, 56, 44].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="it-foot__gold" aria-hidden="true" />

        <div className="it-foot__grid">
          <p className="it-foot__wordmark">
            iamtechni<span className="it-dot" />
          </p>
          <div className="it-foot__col">
            <span className="it-mono">Studio</span>
            <a href="#position" data-scroll data-cursor="hover">
              Position
            </a>
            <a href="#capability" data-scroll data-cursor="hover">
              Capability
            </a>
            <a href="#work" data-scroll data-cursor="hover">
              Work
            </a>
          </div>
          <div className="it-foot__col">
            <span className="it-mono">Contact</span>
            <a href="mailto:hello@iamtechni.com" data-cursor="hover">
              hello@iamtechni.com
            </a>
            <a href="tel:+917418120053" data-cursor="hover">
              +91-7418120053
            </a>
            <a href="https://wa.me/917418120053" target="_blank" rel="noreferrer" data-cursor="hover">
              WhatsApp
            </a>
            <a href="#contact" data-scroll data-cursor="hover">
              Start a project
            </a>
          </div>
        </div>

        <div className="it-foot__base it-mono">
          <span>© {new Date().getFullYear()} iamtechni</span>
          <span>Technology in motion</span>
        </div>
      </footer>
    </div>
  );
}
