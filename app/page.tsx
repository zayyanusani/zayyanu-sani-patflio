"use client";
import { useState } from "react";
import { ArrowUpRight, Github, Mail, Menu, Moon, Sun, X, Download, ExternalLink, Sparkles } from "lucide-react";

const projects=[
 {name:"CafiPay",desc:"Digital wallet and payment platform focused on secure transactions, wallets, transfers and practical financial services.",tech:"Next.js • PostgreSQL • JWT",url:"https://github.com/zayyanusani/cafipay",tag:"FINTECH"},
 {name:"Mabson Blast",desc:"A product being developed from MVP toward a production-ready application with AI and scalable architecture.",tech:"Web • AI • Backend",url:"https://github.com/zayyanusani/mabson-blast",tag:"AI / PRODUCT"},
 {name:"AfriMahjong",desc:"An African-inspired Mahjong game concept designed around culture, fun and multiplayer experiences.",tech:"Game • AI • Multiplayer",tag:"GAME"},
 {name:"ZeePro",desc:"Wireless file-transfer concept for moving photos, videos, documents and folders between phone and PC.",tech:"Wi-Fi • Mobile • Web",tag:"UTILITY"},
 {name:"NewHausaTop",desc:"A Hausa digital news platform focused on publishing, discoverability, SEO and modern web presentation.",tech:"Blogger • SEO • Content",url:"https://newhausatop.blogspot.com/",tag:"MEDIA"}
];
const skills=["HTML","CSS","JavaScript","TypeScript","Python","React","Next.js","Git & GitHub","Artificial Intelligence","UI/UX"];
const socials=[["GitHub","https://github.com/zayyanusani"],["Email","mailto:zayyanusanitv@gmail.com"]];

export default function Home(){
 const [open,setOpen]=useState(false); const [dark,setDark]=useState(true);
 const nav=(id:string)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
 return <div className={dark?"site dark":"site light"}>
  <header className="nav"><div className="container nav-inner">
   <button className="brand" onClick={()=>nav("home")}>ZS<span className="gradient">.</span></button>
   <nav className={open?"nav-links open":"nav-links"}>{["about","skills","projects","journey","contact"].map(x=><button key={x} onClick={()=>nav(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</nav>
   <div className="nav-actions"><button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button><button className="menu-btn" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>

  <main id="home">
   <section className="hero container reveal">
    <div className="hero-copy">
     <span className="eyebrow"><Sparkles size={14}/> SOFTWARE ENGINEER • AI ENTHUSIAST</span>
     <h1>Building <span className="gradient">useful</span> digital experiences.</h1>
     <p>I’m <strong>Zayyanu Sani</strong>, a Software Engineering student building modern software, exploring AI, and turning practical ideas into products that solve real-world problems.</p>
     <div className="hero-actions"><button className="btn primary" onClick={()=>nav("projects")}>Explore Projects <ArrowUpRight size={18}/></button><a className="btn secondary" href="mailto:zayyanusanitv@gmail.com"><Mail size={18}/> Contact Me</a></div>
     <div className="stats"><div><b>5+</b><span>Projects</span></div><div><b>AI</b><span>Focus</span></div><div><b>∞</b><span>Ideas</span></div></div>
    </div>
    <div className="hero-visual"><div className="profile-ring"><div className="profile-avatar">ZS</div></div><span className="status">● Available for opportunities</span><strong>Software + AI</strong><small>Learning • Creating • Shipping</small><div className="mini-stack"><span>React</span><span>Next.js</span><span>Python</span><span>AI</span></div></div>
   </section>

   <section id="about" className="section container reveal"><div className="section-head"><span>01 — ABOUT</span><h2>About me</h2></div>
    <div className="about-grid"><div><h3>Curious about technology. Serious about building.</h3><p>I am a Software Engineering student passionate about software development, artificial intelligence and user experience. My long-term goal is to become a software developer and AI engineer while creating technology that helps people and communities.</p><p>I learn by building—from fintech ideas and games to content platforms and useful tools.</p><div className="quick-facts"><span>📍 Nigeria</span><span>🎓 Miva Open University</span><span>💡 AI & Software</span></div></div>
     <div className="info-card"><div><span>Education</span><b>Software Engineering</b><small>Miva Open University</small></div><div><span>Languages</span><b>English • Hausa</b></div><div><span>Interests</span><b>AI • Software • UI/UX</b></div></div>
    </div>
   </section>

   <section id="skills" className="section container reveal"><div className="section-head"><span>02 — SKILLS</span><h2>My toolkit</h2><p>Technologies I use while learning, experimenting and shipping projects.</p></div><div className="skill-grid">{skills.map((s,i)=><div className="skill-card" key={s}><span>0{i+1}</span><b>{s}</b><i/></div>)}</div></section>

   <section id="projects" className="section container reveal"><div className="section-head row"><div><span>03 — PROJECTS</span><h2>Selected work</h2></div><span className="project-count">Building in public</span></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.name}><div className="project-top"><span>0{i+1} / {p.tag}</span><ArrowUpRight size={20}/></div><h3>{p.name}</h3><p>{p.desc}</p><small>{p.tech}</small>{p.url&&<a href={p.url} target="_blank" rel="noreferrer">View project <ExternalLink size={14}/></a>}</article>)}</div></section>

   <section id="journey" className="section container reveal"><div className="section-head"><span>04 — JOURNEY</span><h2>What I’m building toward</h2></div><div className="journey-grid"><article><span>01</span><h3>Software Engineering</h3><p>Strengthen full-stack development, backend architecture, databases, APIs, testing and production deployment.</p></article><article><span>02</span><h3>Artificial Intelligence</h3><p>Learn practical AI engineering and build useful AI systems that address real problems.</p></article><article><span>03</span><h3>Product Building</h3><p>Turn ideas into reliable products with thoughtful UI/UX, security, performance and consistent iteration.</p></article></div></section>

   <section id="contact" className="section container reveal"><div className="contact-card"><span>05 — CONTACT</span><h2>Have an idea? Let’s build it.</h2><p>Open to projects, collaborations, learning opportunities and interesting ideas.</p><div className="hero-actions"><a className="btn primary" href="mailto:zayyanusanitv@gmail.com"><Mail size={18}/> Email Zayyanu</a><a className="btn secondary" href="https://github.com/zayyanusani" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a></div></div></section>
  </main>
  <footer className="footer"><div className="container footer-inner"><span>© 2026 Zayyanu Sani • Built with Next.js</span><div>{socials.map(([n,u])=><a key={n} href={u} target={u.startsWith("http")?"_blank":undefined} rel="noreferrer">{n}</a>)}</div></div></footer>
 </div>
}