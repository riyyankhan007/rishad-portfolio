import Image from "next/image";
const projects=[
{slug:"the-bear-house-pacific-jaipur",name:"The Bear House — Pacific Mall Jaipur",meta:"1,916 SQ FT · JAIPUR",image:"/projects/bear-house-jaipur/01.jpg"},
{slug:"vox-turquoise-mumbai",name:"VOX — Turquoise Mumbai",meta:"471 SQ FT · MUMBAI",image:"/projects/vox-mumbai/01.jpg"},
{slug:"the-bear-house-m3m",name:"The Bear House — M3M Paragon 57",meta:"RETAIL INTERIOR · M3M",image:"/projects/bear-house-m3m/01.jpg"}];

export default function Home(){return <main className="shell">
<nav className="nav"><a href="/">MR / 26</a><div className="navlinks"><a href="/">About</a><a href="/projects">Work</a><a href="/contact">Contact</a></div></nav>
<section className="aboutHero">
<div><div className="eyebrow">Civil Engineer / Retail Interior Designer</div><h1>Muhammad<br/>Rishad</h1><p className="lead">I work across retail interiors, technical documentation and site execution — translating design intent into spaces that can actually be built.</p><div className="heroActions"><a className="cta" href="/projects">View selected work <span>↗</span></a><a className="textlink" href="mailto:rishad.muhammad313@gmail.com">Start a conversation</a></div></div>
<div className="profileVisual"><Image src="/projects/bear-house-jaipur/01.jpg" alt="The Bear House Pacific Mall Jaipur retail interior" fill priority sizes="(max-width: 800px) 100vw, 42vw" style={{objectFit:"cover"}}/><div className="imageLabel">01 / SELECTED WORK</div></div>
</section>
<section className="introBand"><div className="eyebrow">The approach</div><div className="statement">DESIGN ISN'T JUST ABOUT HOW A SPACE LOOKS. IT'S ABOUT HOW IT GETS BUILT.</div></section>
<section className="bioGrid section"><div className="eyebrow">Profile</div><div><p className="copy">With a Civil Engineering background and 2+ years across retail and commercial environments, Rishad combines space planning with construction drawings, coordination, QA/QC and site execution.</p><p className="copy muted">His work spans retail environments and commercial fit-outs, with technical documentation supporting fixtures, lighting, power and MEP coordination where required.</p></div></section>
<section className="section"><div className="sectionhead"><h2>Selected work</h2><a className="textlink" href="/projects">All projects ↗</a></div><div className="homeProjects">{projects.map((p,i)=><a className="homeProject" href={"/projects/"+p.slug} key={p.slug}><div className="homeProjectImage"><Image src={p.image} alt={p.name} fill sizes="(max-width: 800px) 100vw, 70vw" style={{objectFit:"cover"}}/><span>{String(i+1).padStart(2,"0")}</span></div><div className="homeProjectMeta"><strong>{p.name}</strong><small>{p.meta}</small></div></a>)}</div></section>
<section className="section capabilities"><div className="sectionhead"><h2>Capabilities</h2></div><div className="capGrid"><div><b>01</b><h3>Retail design</h3><p>Space planning and design development for retail environments.</p></div><div><b>02</b><h3>Technical documentation</h3><p>Construction drawings and coordinated documentation.</p></div><div><b>03</b><h3>Execution</h3><p>Site coordination, QA/QC and practical buildability.</p></div></div></section>
<footer className="footer"><span>Muhammad Rishad</span><span>Bangalore · India</span><span>© 2026</span></footer>
</main>}