import Image from "next/image";
import Link from "next/link";

const operatingItems = [
  ["產品標準", "建立菜單、份量、成本、標準配方與品質檢核，確保產品穩定輸出。"],
  ["店務營運", "管理出餐流程、排班、人員訓練、現場管理與門市 SOP，提升營運效率。"],
  ["行銷通路", "推動外送平台、團餐合作、促銷活動與通路開發，擴大營收來源。"],
  ["供應鏈總務", "整合採購、物料、設備維修、供應商、倉儲與盤點，穩定後端支援。"],
];

const developmentStages = [
  ["第一階段", "完成菜單標準、成本表、出餐 SOP、品質檢查與營運日報。"],
  ["第二階段", "穩定外送、團餐、活動促銷與基本營收模型，驗證市場反應。"],
  ["第三階段", "建立門市複製、展店評估與加盟前置制度，形成擴張基礎。"],
];

export default function ChibaPage() {
  return (
    <main className="site-shell subpage">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="拓饗企業首頁">
          <Image className="header-logo" src="/tuoxiang-logo-primary.png" alt="拓饗國際 Tuoxiang International" width={220} height={266} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="/">拓饗首頁</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="sub-hero chiba-hero">
        <p className="eyebrow">CHIBA BUSINESS UNIT</p>
        <h1>吃吧智慧餐飲系統</h1>
        <p>
          吃吧是拓饗企業在餐飲創新領域推出的智慧餐飲系統，導入自動化設備、機器人流程設計與數據化 SOP，
          建立低人力、高效率、可複製的餐飲營運模型。
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="#model">營運模型</Link>
          <Link className="button secondary" href="/">拓饗企業</Link>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>吃吧的核心不是單店餐飲，而是可被標準化與複製的智慧餐飲系統。</h2>
        </div>
        <div className="copy-block">
          <p>
            吃吧以既定產品與標準流程為基礎，優先建立穩定出餐、成本控制、品質管理與現場管理制度，
            再逐步擴大到外送、團餐、活動與連鎖化營運。
          </p>
          <p>
            初期重點不在放大研發編制，而在產品標準、出餐 SOP、採購供應、現場訓練與營運數據。
            銷售模型穩定後，再依市場回饋進行產品優化與新品開發。
          </p>
        </div>
      </section>

      <section className="section" id="model">
        <div className="section-heading">
          <p className="section-label">OPERATING MODEL</p>
          <h2>吃吧營運模型</h2>
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
          <h2>發展階段規劃</h2>
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
