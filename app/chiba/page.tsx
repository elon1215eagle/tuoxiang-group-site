import Image from "next/image";
import Link from "next/link";

const operatingItems = [
  ["產品標準", "菜單、份量、成本、標準配方與品質檢核。"],
  ["店務營運", "出餐流程、排班、人員訓練、現場管理與門市 SOP。"],
  ["行銷通路", "外送平台、團餐合作、促銷活動與通路開發。"],
  ["供應鏈總務", "採購、物料、設備維修、供應商、倉儲與盤點。"],
];

const developmentStages = [
  ["第一階段", "建立菜單、成本、出餐 SOP、品質標準與日報追蹤。"],
  ["第二階段", "穩定外送、團餐、活動促銷與基本營收模型。"],
  ["第三階段", "形成門市複製、展店評估與加盟前置制度。"],
];

export default function ChibaPage() {
  return (
    <main className="site-shell subpage">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="返回拓饗國際首頁">
          <Image src="/tuoxiang-logo.png" alt="拓饗國際 Tuoxiang International" width={136} height={136} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="/">拓饗首頁</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="sub-hero chiba-hero">
        <p className="eyebrow">CHIBA BUSINESS UNIT</p>
        <h1>吃吧餐飲連鎖</h1>
        <p>
          吃吧是拓饗國際旗下的餐飲連鎖事業，聚焦餐盒產品、門市營運、
          外送通路與標準化管理，目標建立可控成本、可複製、可展店的餐飲模型。
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="#model">查看營運模型</Link>
          <Link className="button secondary" href="/">返回拓饗首頁</Link>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>吃吧初期重點不是研發部，而是產品標準與營運複製。</h2>
        </div>
        <div className="copy-block">
          <p>
            若吃吧已有既定產品，初期不需要先建立大型研發部，
            應優先建立產品標準、成本表、出餐 SOP、品管檢核與門市管理制度。
          </p>
          <p>
            待產品穩定、營收模型清楚、門市流程可複製後，再規劃新品研發與展店模型。
          </p>
        </div>
      </section>

      <section className="section" id="model">
        <div className="section-heading">
          <p className="section-label">OPERATING MODEL</p>
          <h2>吃吧營運職能</h2>
        </div>
        <div className="support-grid">
          {operatingItems.map(([title, description]) => (
            <article className="support-item" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stage-section">
        <div className="section-heading">
          <p className="section-label">DEVELOPMENT STAGES</p>
          <h2>建議發展階段</h2>
        </div>
        <div className="stage-list">
          {developmentStages.map(([stage, description]) => (
            <article key={stage}>
              <span>{stage}</span>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
