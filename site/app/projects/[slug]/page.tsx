import Image from "next/image";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import fs from "node:fs";
import path from "node:path";

const data:any={
"the-bear-house-pacific-jaipur":{title:"The Bear House — Pacific Mall Jaipur",meta:"1,916 SQ FT · Jaipur · New Store",text:"A new retail store documented across fixture planning, power, lighting, audio, MEP, CCTV, POS and related technical coordination.",images:["/projects/bear-house-jaipur/01.jpg","/projects/bear-house-jaipur/02.jpg","/projects/bear-house-jaipur/03.jpg","/projects/bear-house-jaipur/04.jpg"],doc:"/projects/bear-house-jaipur/technical.pdf"},
"vox-turquoise-mumbai":{title:"VOX — Turquoise Mumbai",meta:"471 SQ FT · Mumbai · GFC Documentation",text:"A compact retail environment developed through GFC documentation, spatial planning, ceiling details, elevations and technical documentation.",images:["/projects/vox-mumbai/01.jpg","/projects/vox-mumbai/02.jpg","/projects/vox-mumbai/03.jpg","/projects/vox-mumbai/04.jpg"],doc:"/projects/vox-mumbai/technical.pdf"},
"the-bear-house-m3m":{title:"The Bear House — M3M Paragon 57",meta:"Retail Interior · M3M Paragon 57",text:"A retail interior presented through 3D views and supporting technical documentation.",images:["/projects/bear-house-m3m/01.jpg","/projects/bear-house-m3m/02.jpg","/projects/bear-house-m3m/03.jpg","/projects/bear-house-m3m/04.jpg"],doc:""}};

export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
const {slug}=await params;
const p=data[slug];
if(!p)return {};
return {title:p.title,description:p.text,openGraph:{title:p.title,description:p.text,images:[{url:p.images[0]}]},twitter:{card:"summary_large_image",title:p.title,description:p.text,images:[p.images[0]]}};
}

const fileExists=(url:string)=>!!url&&fs.existsSync(path.join(process.cwd(),"public",url));

export default async function Project({params}:{params:Promise<{slug:string}>}){
const {slug}=await params;
const p=data[slug];
if(!p)notFound();
const hasDoc=fileExists(p.doc);
return <main className="shell">
<nav className="nav"><a href="/">MR / 26</a><div className="navlinks"><a href="/">About</a><a href="/projects">Work</a><a href="/contact">Contact</a></div></nav>
<section className="casehero"><div className="eyebrow">Case study</div><h1>{p.title}</h1><p className="copy">{p.text}</p></section>
<section className="caseMeta"><div><label>Project</label><p>{p.meta}</p></div><div><label>Approach</label><p>Space planning · technical documentation · coordination · visualization</p></div></section>
<section className="caseGallery">{p.images.map((src:string,i:number)=><figure className={i===0?"wide":""} key={src}><Image src={src} alt={p.title+" — project view "+(i+1)} fill sizes="(max-width: 800px) 100vw, 80vw" style={{objectFit:"cover"}}/><figcaption>0{i+1}</figcaption></figure>)}</section>
{hasDoc&&<section className="section"><div className="sectionhead"><h2>Behind the drawing</h2><a className="textlink" href={p.doc} target="_blank" rel="noreferrer">Open full PDF ↗</a></div><div className="pdfFrame"><iframe src={p.doc+"#view=FitH"} title={p.title+" technical documentation"}/></div></section>}
</main>}