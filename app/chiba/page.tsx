import Image from "next/image";
import Link from "next/link";

const operatingItems = [
  ["產品標準", "建立菜單、份量、成本、標準配方與品質檢核，確保產品穩定輸出。"],
  ["店務營運", "管理出餐流程、排班、人員訓練、現場管理與門市 SOP，提升營運效率。"],
  ["行銷通路", "推動外送平台、團餐合作、促銷活動與通路開發，擴大營收來源。"],
  ["供應鏈總務", "整合採購、物料、設備維修、供應商、倉儲與盤點，穩定後端支援。"],
];

const developmentStages = [
  ["第一階段", "建立菜單標準、成本表、出餐 SOP、品質檢查與日報追蹤。"],
  ["第二階段", "穩定外送、團餐、活動促銷與基本營收模型，驗證市場反應。"],
  ["第三階段", "形成門市複製、展店評估與加盟前置制度，建立擴張基礎。"],
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
          吃吧是拓饗國際旗下的餐飲連鎖事業，聚焦餐盒產品、門市營運、外送通路與標準化管理，
          以穩定品質、可控成本與可複製流程，建立具備展店潛力的餐飲營運模型。
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="#model">查看營運模型</Link>
          <Link className="button secondary" href="/">返回拓饗首頁</Link>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>吃吧的核心，不只是產品，而是可被複製的餐飲營運系統。</h2>
        </div>
        <div className="copy-block">
          <p>
            若產品已具備基礎，吃吧初期更應優先建立產品標準、成本結構、出餐 SOP、品管檢核與現場管理制度。
            這些基礎會決定未來能否穩定營收、控制毛利，並支撐後續展店。
          </p>
          <p>
            在拓饗的集團架構下，吃吧透過共享財務、設計、行政與供應鏈支援，將資源集中在產品穩定、
            通路開發、門市效率與展店模型，逐步建立具備規模化條件的餐飲事業。
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
