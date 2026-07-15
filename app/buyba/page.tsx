import Image from "next/image";
import Link from "next/link";

const focusItems = [
  ["會員經營", "建立會員名單、有效會員追蹤、直銷商服務與教育節奏。"],
  ["商城營運", "商品上架、商品資訊、訂單狀態、活動檔期與後台資料管理。"],
  ["商品推廣", "商品組合、PV 設計、活動成交、社群內容與銷售轉換。"],
  ["客服物流", "會員問題、訂單協調、退換貨、庫存、出貨與物流異常處理。"],
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
          <Image src="/tuoxiang-logo.png" alt="拓饗國際 Tuoxiang International" width={136} height={136} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="/">拓饗首頁</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="sub-hero buyba-hero">
        <p className="eyebrow">BUYBA BUSINESS UNIT</p>
        <h1>買吧直銷商城</h1>
        <p>
          買吧是拓饗國際旗下的直銷商城事業，聚焦會員經營、商品推廣、
          商城銷售與直銷商服務，目標建立可持續擴張的會員型銷售平台。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="http://127.0.0.1:4173/?v=2">
            前往現有買吧頁面
          </a>
          <Link className="button secondary" href="/">返回拓饗首頁</Link>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>買吧不重新設計，先做拓饗母體導流。</h2>
        </div>
        <div className="copy-block">
          <p>
            既有買吧頁面已完成，拓饗網站中的買吧分頁應扮演「集團導流與事業說明」角色，
            不重複製作完整品牌頁，避免內容分散與維護成本增加。
          </p>
          <p>
            後續若買吧正式上線網域，可將本頁的導流按鈕改成正式網址，並保留拓饗對買吧的事業定位說明。
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
          <h2>建議追蹤指標</h2>
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
