import Image from "next/image";
import Link from "next/link";

const mallUrl = "https://maiba-brand-site.vercel.app";

const focusItems = [
  {
    title: "嚴選商品與品牌管理",
    description:
      "以妍沁國際的品牌營運能力為基礎，建立商品篩選、上架節奏、價格策略與產品資料管理，讓商城商品具備長期經營價值。",
  },
  {
    title: "會員電商與社群推廣",
    description:
      "整合會員經營、社群推廣與數據化營運，讓買吧不只是銷售平台，而是可持續擴張的會員型通路系統。",
  },
  {
    title: "直銷制度與電商轉換",
    description:
      "結合直銷推廣機制與電商交易流程，讓推薦、分潤、購買與服務更清楚，降低人工管理成本並提升轉換效率。",
  },
  {
    title: "總部支援與營運複製",
    description:
      "由拓饗體系提供財務、設計、客服、物流、行政與營運支援，建立可管理、可追蹤、可複製的商城營運模型。",
  },
];

const kpis = ["商品上架效率", "會員成長數", "訂單轉換率", "回購率", "社群推廣成效", "分潤與財務準確率"];

export default function BuybaPage() {
  return (
    <main className="site-shell subpage">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="回到拓饗首頁">
          <Image src="/tuoxiang-logo-horizontal.png" alt="拓饗國際 Tuoxiang International" width={220} height={90} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="/">拓饗首頁</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="sub-hero buyba-hero entry-hero">
        <div className="entry-copy">
          <p className="eyebrow">BUYBA MALL</p>
          <h1>買吧商城</h1>
          <p className="entry-lead">拓饗體系旗下新型態會員電商通路</p>
          <p>
            買吧商城結合嚴選商品、社群推廣、會員經濟與數據化營運，打造可擴張、可複製、可持續經營的商城型通路平台。
            此頁作為拓饗官網的正式品牌入口，實際商品、會員與商城服務請進入買吧商城。
          </p>
          <div className="hero-actions">
            <a className="button primary button-large" href={mallUrl}>
              進入買吧商城
            </a>
            <Link className="button secondary" href="/">
              返回拓饗首頁
            </Link>
          </div>
        </div>
        <aside className="entry-panel" aria-label="買吧商城定位">
          <span>Brand Entry</span>
          <strong>品牌入口負責定位，商城網站負責成交。</strong>
          <p>讓使用者先看懂買吧與拓饗的關係，再以最短路徑進入實際商城。</p>
        </aside>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>買吧的核心定位，是拓饗體系的會員電商與通路運營平台。</h2>
        </div>
        <div className="copy-block">
          <p>
            妍沁國際為拓饗企業旗下核心品牌營運公司，專注於產品選品、品牌建構與通路經營。買吧商城作為妍沁國際旗下核心電商平台，
            承接商品銷售、會員推廣、社群裂變與數據化管理任務。
          </p>
          <p>
            買吧不只是一般購物頁，而是以「直銷＋電商」融合模式建立的新型態分潤經濟體系。平台需要同時兼顧商品力、制度力、
            推廣力、客服力與財務準確度，才能形成可管理、可複製、可長期放大的通路系統。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">OPERATING FOCUS</p>
          <h2>買吧營運重點</h2>
        </div>
        <div className="support-grid">
          {focusItems.map((item) => (
            <article className="support-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section metric-section">
        <div>
          <p className="section-label">KPI</p>
          <h2>買吧應追蹤的營運指標</h2>
        </div>
        <div className="metric-list">
          {kpis.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contact-section buyba-entry-cta">
        <p className="section-label">MALL ACCESS</p>
        <h2>進入買吧商城，查看商品與會員服務。</h2>
        <p>拓饗官網保留集團與事業定位，買吧商城承接實際瀏覽、商品介紹、會員推廣與銷售轉換。</p>
        <div className="contact-actions">
          <a className="button primary" href={mallUrl}>
            立即進入買吧商城
          </a>
          <Link className="button secondary" href="/chiba">
            查看吃吧事業
          </Link>
        </div>
      </section>
    </main>
  );
}
