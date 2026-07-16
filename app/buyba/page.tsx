import Image from "next/image";
import Link from "next/link";

const mallUrl = "https://maiba-brand-site.vercel.app";

const focusItems = [
  {
    title: "嚴選商品與品牌管理",
    description:
      "以妍沁國際的品牌營運能力為基礎，建立商品篩選、上架節奏、價格策略與產品資料管理，讓商品組合具備長期經營價值。",
  },
  {
    title: "會員電商與社群推廣",
    description:
      "整合會員經營、社群推廣與數據化營運，讓買吧形成可持續擴張的會員型通路系統。",
  },
  {
    title: "直銷制度與電商轉換",
    description:
      "結合直銷推廣機制與電商交易流程，讓推薦、分潤、購買與服務更清楚，降低人工管理成本並提升轉換效率。",
  },
  {
    title: "總部支援與營運複製",
    description:
      "由拓饗體系整合財務、設計、客服、物流、行政與營運支援，建立可管理、可追蹤、可複製的商城營運模型。",
  },
];

const kpis = ["商品上架效率", "會員成長數", "訂單轉換率", "回購率", "社群推廣成效", "分潤與財務準確率"];

export default function BuybaPage() {
  return (
    <main className="site-shell subpage">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="拓饗企業首頁">
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
          </p>
          <div className="hero-actions">
            <a className="button primary button-large" href={mallUrl}>
              買吧商城
            </a>
            <Link className="button secondary" href="/">
              拓饗企業
            </Link>
          </div>
        </div>
        <aside className="entry-panel" aria-label="買吧商城定位">
          <span>Business Position</span>
          <strong>會員電商、直銷通路、社群推廣與數據化管理的整合平台。</strong>
          <p>以商品力、制度力、推廣力與營運支援，建構可長期放大的會員商城模型。</p>
        </aside>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-label">POSITIONING</p>
          <h2>買吧的核心定位，是拓饗體系的會員電商與通路運營平台。</h2>
        </div>
        <div className="copy-block">
          <p>
            妍沁國際為拓饗企業旗下核心品牌營運公司，專注於產品選品、品牌建構與通路經營。
            買吧商城作為妍沁國際旗下核心電商平台，承接商品銷售、會員推廣、社群裂變與數據化管理任務。
          </p>
          <p>
            買吧以「直銷＋電商」融合模式建立新型態分潤經濟體系。平台同時兼顧商品力、制度力、
            推廣力、客服力與財務準確度，形成可管理、可複製、可長期放大的通路系統。
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
          <h2>買吧營運指標</h2>
        </div>
        <div className="metric-list">
          {kpis.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contact-section buyba-entry-cta">
        <p className="section-label">MALL</p>
        <h2>嚴選商品、會員經濟與社群推廣的商城型通路。</h2>
        <p>買吧承接拓饗在品牌通路、會員經營與電商轉換上的事業布局。</p>
        <div className="contact-actions">
          <a className="button primary" href={mallUrl}>
            買吧商城
          </a>
          <Link className="button secondary" href="/chiba">
            吃吧事業
          </Link>
        </div>
      </section>
    </main>
  );
}
