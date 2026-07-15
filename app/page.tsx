import Image from "next/image";
import Link from "next/link";

const supportItems = [
  ["財務控管", "損益、成本、現金流、分帳與月報"],
  ["行政人資", "招募、到職、考勤、訓練與制度文件"],
  ["設計支援", "品牌視覺、活動素材、商品圖與通路物料"],
  ["客服物流", "會員服務、訂單協調、出貨與異常追蹤"],
  ["營運制度", "SOP、KPI、會議追蹤與跨部門協作"],
  ["事業整合", "買吧與吃吧資源配置、成效檢核與擴張管理"],
];

const operatingPrinciples = [
  "公司母體清楚，事業部權責分明",
  "共享後勤集中管理，避免重複配置成本",
  "用制度、流程與數據支撐事業擴張",
  "先建立可落地模型，再逐步擴大投入",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="拓饗國際首頁">
          <Image src="/tuoxiang-logo.png" alt="拓饗國際 Tuoxiang International" width={136} height={136} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="#about">集團定位</Link>
          <Link href="#business">事業版圖</Link>
          <Link href="#support">共享後勤</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">TUOXIANG INTERNATIONAL</p>
          <h1>拓饗國際</h1>
          <p className="hero-lead">
            整合直銷商城、餐飲連鎖與共享後勤資源的事業發展平台。
          </p>
          <p className="hero-text">
            拓饗以集團化管理為核心，建立清楚的事業分工、後勤支援與營運制度，
            協助旗下買吧與吃吧形成可管理、可複製、可持續擴張的營運模型。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#business">查看事業版圖</Link>
            <Link className="button secondary" href="#contact">合作洽詢</Link>
          </div>
        </div>
        <div className="hero-card" aria-label="拓饗管理核心">
          <Image src="/tuoxiang-logo.png" alt="" width={520} height={520} priority />
          <div>
            <span>核心定位</span>
            <strong>資源整合 · 制度管理 · 事業擴張</strong>
          </div>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">GROUP POSITIONING</p>
          <h2>拓饗是事業母體，不是單一品牌頁。</h2>
        </div>
        <div className="copy-block">
          <p>
            拓饗負責整合集團資源，包含財務、行政、人資、設計、客服、物流與營運管理。
            旗下事業各自面對不同市場，但後端管理需要一致的制度、報表與責任歸屬。
          </p>
          <p>
            現階段網站應先建立拓饗的母體形象，讓外部合作對象清楚理解：
            買吧是直銷商城事業，吃吧是餐飲連鎖事業，兩者由拓饗進行資源整合與營運管理。
          </p>
        </div>
      </section>

      <section className="section" id="business">
        <div className="section-heading">
          <p className="section-label">BUSINESS PORTFOLIO</p>
          <h2>旗下事業版圖</h2>
          <p>用不同商業模型切入市場，再用同一套後勤與管理系統支撐成長。</p>
        </div>
        <div className="business-grid">
          <article className="business-card">
            <span className="card-kicker">直銷商城</span>
            <h3>買吧</h3>
            <p>
              聚焦會員經營、商品推廣、商城銷售、直銷商教育與社群轉換，
              建立會員型銷售平台。
            </p>
            <ul>
              <li>會員招募與直銷商服務</li>
              <li>商品組合、PV、活動成交</li>
              <li>商城訂單、客服與物流銜接</li>
            </ul>
            <Link className="text-link" href="/buyba">進入買吧介紹</Link>
          </article>
          <article className="business-card accent">
            <span className="card-kicker">餐飲連鎖</span>
            <h3>吃吧</h3>
            <p>
              聚焦餐盒產品、門市營運、外送通路、產品標準與展店複製，
              建立可控成本與可複製的餐飲模型。
            </p>
            <ul>
              <li>菜單、份量、成本與品質標準</li>
              <li>出餐流程、排班與現場管理</li>
              <li>外送、團餐與合作通路開發</li>
            </ul>
            <Link className="text-link" href="/chiba">進入吃吧介紹</Link>
          </article>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="section-heading">
          <p className="section-label">SHARED SERVICE CENTER</p>
          <h2>共享後勤中心</h2>
          <p>
            共享後勤不只是支援單位，而是讓買吧與吃吧降低重複成本、提升管理效率的核心系統。
          </p>
        </div>
        <div className="support-grid">
          {supportItems.map(([title, description]) => (
            <article className="support-item" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section operating-section">
        <div>
          <p className="section-label">OPERATING PRINCIPLES</p>
          <h2>拓饗的管理原則</h2>
        </div>
        <ol className="principle-list">
          {operatingPrinciples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT</p>
        <h2>合作洽詢</h2>
        <p>
          適合廠商合作、商品合作、餐飲通路、團餐合作、商城會員與事業合作洽詢。
        </p>
        <div className="contact-actions">
          <Link className="button primary" href="/buyba">買吧合作</Link>
          <Link className="button secondary" href="/chiba">吃吧合作</Link>
        </div>
      </section>
    </main>
  );
}
