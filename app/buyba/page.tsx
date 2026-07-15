import Image from "next/image";
import Link from "next/link";

const focusItems = [
  ["會員經營", "建立會員名單、有效會員追蹤、直銷商服務與教育節奏，形成可累積的銷售資產。"],
  ["商城營運", "管理商品上架、商品資訊、訂單狀態、活動檔期與後台資料，確保營運流程穩定。"],
  ["商品推廣", "規劃商品組合、PV 設計、活動成交、社群內容與銷售轉換，提升市場動能。"],
  ["客服物流", "串接會員問題、訂單協調、退換貨、庫存、出貨與物流異常，維持服務品質。"],
];

const kpis = [
  "月銷售額",
  "新增會員數",
  "有效會員數",
  "活動成交額",
  "訂單處理時效",
  "客服結案率",
];

export default function BuybaPage() {
  return (
    <main className="site-shell subpage">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="返回拓饗國際首頁">
          <Image src="/tuoxiang-logo-horizontal.png" alt="拓饗國際 Tuoxiang International" width={220} height={90} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="/">拓饗首頁</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="sub-hero buyba-hero">
        <p className="eyebrow">BUYBA BUSINESS UNIT</p>
        <h1>買吧商城</h1>
        <p>
          買吧商城為妍沁國際旗下核心電商平台，屬於拓饗企業品牌與通路布局的重要事業。
          平台採用「直銷＋電商」融合模式，結合社群推廣、數據化管理與嚴選商品策略，打造新型態分潤經濟體系。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="https://maiba-brand-site.vercel.app">
            前往買吧正式網站
          </a>
          <Link className="button secondary" href="/">返回拓饗首頁</Link>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>買吧承接的是品牌通路與會員商流，不只是單一商品銷售。</h2>
        </div>
        <div className="copy-block">
          <p>
            買吧的核心價值在於建立可被管理、可被追蹤、可被放大的會員銷售系統。
            透過商品組合、創新獎金制度、社群裂變機制與會員服務流程，將一次性交易逐步轉化為長期會員經營。
          </p>
          <p>
            在拓饗企業的產業整合架構下，買吧串接妍沁國際的選品能力、品牌建構能力與供應鏈資源，
            將更多資源集中在會員成長、商品轉換、社群推廣與市場推進。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">OPERATING FOCUS</p>
          <h2>買吧營運重點</h2>
        </div>
        <div className="support-grid">
          {focusItems.map(([title, description]) => (
            <article className="support-item" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section metric-section">
        <div>
          <p className="section-label">KPI</p>
          <h2>核心追蹤指標</h2>
        </div>
        <div className="metric-list">
          {kpis.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
