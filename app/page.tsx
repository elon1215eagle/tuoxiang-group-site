import Image from "next/image";
import Link from "next/link";
import { AmbientSound } from "./AmbientSound";

const industryItems = [
  ["區塊鏈技術應用", "參與數位資產平台相關技術建設與應用場景規劃，推動數位經濟基礎能力。"],
  ["AI 算力基礎建設", "投入 AI 算力資源配置與技術應用布局，建構未來智慧產業所需底層能力。"],
  ["國際貿易整合", "透過跨境資源整合，拓展國際貿易、供應鏈網絡與新型消費品通路機會。"],
  ["兩岸產學合作", "推動產業、學研與資源交流合作，深化跨領域鏈結與長期產業協作。"],
  ["智慧餐飲系統", "以自動化設備、機器人流程與數據化 SOP，建立低人力、高標準化餐飲模型。"],
  ["實體產業合作", "連結建設開發、供應鏈與實體場景，評估具長期價值的產業合作機會。"],
];

const values = [
  "科技為底：以 AI、區塊鏈與數位基礎建設推動產業升級。",
  "通路為橋：整合電商、直銷、跨境供應鏈與實體通路資源。",
  "品牌為核：透過品牌經營、產品選品與會員運營累積長期價值。",
  "合規為本：所有業務依循當地法規與審查機制，重視風險控管與穩健發展。",
];

export default function Home() {
  return (
    <main className="site-shell">
      <AmbientSound />
      <header className="site-header">
        <Link className="brand-mark" href="/" aria-label="拓饗企業首頁">
          <Image src="/tuoxiang-logo-horizontal.png" alt="拓饗國際 Tuoxiang International" width={220} height={90} />
        </Link>
        <nav className="site-nav" aria-label="主要導覽">
          <Link href="#about">集團定位</Link>
          <Link href="#industry">產業布局</Link>
          <Link href="#innovation">創新事業</Link>
          <Link href="#brand">品牌通路</Link>
          <Link href="/buyba">買吧</Link>
          <Link href="/chiba">吃吧</Link>
        </nav>
      </header>

      <section className="hero-section">
        <video className="hero-bg-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/blue-digital-tech-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">TOP XIANG GROUP</p>
          <h1>拓饗企業</h1>
          <p className="hero-lead">以產業整合與科技應用為核心，打造可規模化的未來商業生態系。</p>
          <p className="hero-text">
            拓饗企業聚焦新經濟體系與實體產業融合，透過科技驅動、品牌經營、通路整合與商業落地，
            建構跨領域、高效率、可複製的集團型營運平台。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#industry">產業布局</Link>
            <Link className="button secondary" href="#film">品牌影片</Link>
          </div>
          <div className="hero-signals" aria-label="拓饗企業核心能力">
            <span>Technology</span>
            <span>Industry</span>
            <span>Brand</span>
            <span>Channel</span>
          </div>
        </div>
        <div className="hero-card" aria-label="拓饗企業核心定位">
          <Image src="/tuoxiang-logo-horizontal.png" alt="" width={640} height={320} priority />
          <div>
            <span>集團定位</span>
            <strong>科技為底、通路為橋、品牌為核，推動可落地的產業整合。</strong>
          </div>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">GROUP POSITIONING</p>
          <h2>拓饗企業不是單一品牌公司，而是跨產業資源整合與商業落地平台。</h2>
        </div>
        <div className="copy-block">
          <p>
            拓饗企業以「產業整合與科技應用」為核心，長期聚焦於新經濟體系與實體產業的深度融合。
            集團透過科技能力、品牌建構、通路運營與供應鏈整合，持續建構可規模化的產業生態系。
          </p>
          <p>
            每一項事業布局，都以合規經營、風險控管、資源協作與長期穩健發展為前提，
            讓商業模式具備可執行、可管理、可複製的成長基礎。
          </p>
        </div>
      </section>

      <section className="statement-section">
        <p>Top Xiang Group believes the next generation of business growth will not come from a single channel or a single product.</p>
        <h2>It comes from the ability to integrate technology, industry, brand and execution into one scalable operating system.</h2>
      </section>

      <section className="section" id="industry">
        <div className="section-heading">
          <p className="section-label">INDUSTRY PORTFOLIO</p>
          <h2>產業布局</h2>
          <p>
            拓饗近年積極投入多項前瞻產業，涵蓋區塊鏈技術應用、AI 算力基礎建設、國際貿易整合、
            兩岸產學合作、智慧餐飲系統與實體產業合作。
          </p>
        </div>
        <div className="support-grid">
          {industryItems.map(([title, description]) => (
            <article className="support-item" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column" id="innovation">
        <div>
          <p className="section-label">INNOVATION BUSINESS</p>
          <h2>吃吧智慧餐飲系統，打造低人力、高效率、可複製的餐飲營運模型。</h2>
        </div>
        <div className="copy-block">
          <p>
            在餐飲創新領域，拓饗推出「吃吧」智慧餐飲系統，導入自動化設備、機器人流程設計、
            半自動化廚房設備與數據化 SOP，降低人力依賴並提升出餐穩定度。
          </p>
          <p>
            吃吧的發展重點，是讓餐飲營運從仰賴個人經驗，轉向標準化、流程化與數據化管理，
            進一步提高連鎖化、加盟複製與規模擴張的可能性。
          </p>
          <Link className="text-link" href="/chiba">吃吧事業</Link>
        </div>
      </section>

      <section className="section" id="brand">
        <div className="section-heading">
          <p className="section-label">BRAND & CHANNEL</p>
          <h2>品牌與通路</h2>
          <p>
            拓饗透過品牌公司、商城平台與會員運營，建立從產品選品、品牌包裝、社群推廣到銷售轉換的完整通路架構。
          </p>
        </div>
        <div className="business-grid">
          <article className="business-card">
            <span className="card-kicker">品牌營運公司</span>
            <h3>妍沁國際</h3>
            <p>
              妍沁國際為拓饗企業旗下核心品牌營運公司，專注於產品選品、品牌建構與通路經營。
              以「自然嚴選」為產品核心理念，持續開發具差異化與長期價值的商品組合。
            </p>
            <ul>
              <li>產品選品與品牌建構</li>
              <li>供應鏈整合與商品組合</li>
              <li>通路經營與市場推廣</li>
            </ul>
          </article>
          <article className="business-card accent">
            <span className="card-kicker">會員電商平台</span>
            <h3>買吧商城</h3>
            <p>
              買吧商城為妍沁國際旗下核心電商平台，採用「直銷＋電商」融合模式，
              結合社群推廣、數據化管理、分潤制度與嚴選商品策略，打造新型態會員電商通路。
            </p>
            <ul>
              <li>嚴選商品與會員經營</li>
              <li>社群推廣與電商轉換</li>
              <li>分潤制度與數據化管理</li>
            </ul>
            <Link className="text-link" href="/buyba">買吧商城</Link>
          </article>
        </div>
      </section>

      <section className="section operating-section">
        <div>
          <p className="section-label">CORE VALUE</p>
          <h2>拓饗核心價值</h2>
        </div>
        <ol className="principle-list">
          {values.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="section video-section" id="film">
        <div className="section-heading">
          <p className="section-label">BRAND FILM</p>
          <h2>拓饗企業形象影片</h2>
          <p>科技、產業、品牌與通路整合，形成拓饗企業的長期發展主軸。</p>
        </div>
        <div className="video-frame">
          <video controls preload="metadata" poster="/tuoxiang-logo-horizontal.png">
            <source src="/tuoxiang-group-v2-web.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">BUSINESS UNITS</p>
        <h2>事業布局</h2>
        <p>買吧商城與吃吧智慧餐飲，分別承接拓饗在會員電商與智慧餐飲領域的事業發展。</p>
        <div className="contact-actions">
          <Link className="button primary" href="/buyba">買吧商城</Link>
          <Link className="button secondary" href="/chiba">吃吧事業</Link>
        </div>
      </section>
    </main>
  );
}
