import Image from "next/image";
import Link from "next/link";

const supportItems = [
  ["財務治理", "建立損益、成本、現金流與分帳機制，讓各事業體的經營結果清楚可追蹤。"],
  ["行政人資", "整合招募、到職、考勤、訓練與制度文件，支撐團隊穩定運作。"],
  ["品牌設計", "統籌品牌視覺、活動素材、商品圖與通路物料，維持集團對外形象一致。"],
  ["客服物流", "串接會員服務、訂單協調、出貨追蹤與異常處理，提升服務品質。"],
  ["營運制度", "建立 SOP、KPI、會議追蹤與跨部門協作節奏，讓管理能被執行與複製。"],
  ["事業整合", "以集團視角配置買吧與吃吧資源，讓不同事業共享能力、降低重複成本。"],
];

const operatingPrinciples = [
  "以集團母體思維規劃事業，不以單一專案思維短期運作。",
  "以制度與數據管理成效，讓決策有依據、責任有歸屬。",
  "以共享後勤降低重複成本，讓資源集中於成長與轉換。",
  "以可複製模型推動擴張，先穩定流程，再放大規模。",
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
          <Link href="#business">事業佈局</Link>
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
            以集團化營運思維，整合商流、餐飲與後勤資源，打造可持續擴張的事業平台。
          </p>
          <p className="hero-text">
            拓饗國際不只是單一品牌的經營者，而是以事業母體的角色，整合資源、建立制度、配置團隊，
            協助旗下買吧與吃吧在不同市場中形成清楚定位、穩定管理與長期成長能力。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#business">查看事業佈局</Link>
            <Link className="button secondary" href="#contact">合作洽詢</Link>
          </div>
        </div>
        <div className="hero-card" aria-label="拓饗管理核心">
          <Image src="/tuoxiang-logo.png" alt="" width={520} height={520} priority />
          <div>
            <span>核心價值</span>
            <strong>資源整合 · 制度治理 · 事業擴張</strong>
          </div>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">GROUP POSITIONING</p>
          <h2>拓饗是事業整合平台，也是旗下品牌的營運中樞。</h2>
        </div>
        <div className="copy-block">
          <p>
            拓饗國際以集團母體作為定位，負責整合財務、行政、人資、設計、客服、物流與營運制度。
            旗下事業面對不同市場與客群，但後端管理必須具備一致的制度標準、數據節奏與責任歸屬。
          </p>
          <p>
            我們以買吧直銷商城與吃吧餐飲連鎖作為兩大事業軸線，透過共享後勤與營運治理，
            讓不同商業模型能在同一套管理邏輯下穩定發展，並逐步建立可複製、可擴張的成長基礎。
          </p>
        </div>
      </section>

      <section className="section" id="business">
        <div className="section-heading">
          <p className="section-label">BUSINESS PORTFOLIO</p>
          <h2>事業佈局</h2>
          <p>
            拓饗以「商城會員」與「餐飲連鎖」兩種商業模型切入市場，並以共享後勤支撐事業成長。
          </p>
        </div>
        <div className="business-grid">
          <article className="business-card">
            <span className="card-kicker">直銷商城</span>
            <h3>買吧</h3>
            <p>
              買吧聚焦會員經營、商品推廣與商城銷售，透過社群內容、會員服務與直銷商教育，
              建立可累積、可轉換、可放大的會員型商流平台。
            </p>
            <ul>
              <li>會員招募、直銷商服務與教育培訓</li>
              <li>商品組合、PV 規劃與活動成交</li>
              <li>商城訂單、客服服務與物流銜接</li>
            </ul>
            <Link className="text-link" href="/buyba">進入買吧事業介紹</Link>
          </article>
          <article className="business-card accent">
            <span className="card-kicker">餐飲連鎖</span>
            <h3>吃吧</h3>
            <p>
              吃吧聚焦餐盒產品、門市營運與通路合作，透過產品標準、成本控管與現場管理，
              建立具備穩定品質與展店潛力的餐飲營運模型。
            </p>
            <ul>
              <li>菜單、份量、成本與品質標準</li>
              <li>出餐流程、人員訓練與門市管理</li>
              <li>外送、團餐、合作通路與展店規劃</li>
            </ul>
            <Link className="text-link" href="/chiba">進入吃吧事業介紹</Link>
          </article>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="section-heading">
          <p className="section-label">SHARED SERVICE CENTER</p>
          <h2>共享後勤中心</h2>
          <p>
            共享後勤是拓饗的重要管理基礎。透過集中資源、統一標準與跨部門協作，
            讓旗下事業降低重複成本，並提升執行效率與管理透明度。
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
          <h2>拓饗的營運原則</h2>
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
          歡迎品牌廠商、商品供應商、餐飲通路、團餐合作、商城會員與事業合作夥伴洽詢。
        </p>
        <div className="contact-actions">
          <Link className="button primary" href="/buyba">買吧合作</Link>
          <Link className="button secondary" href="/chiba">吃吧合作</Link>
        </div>
      </section>
    </main>
  );
}
