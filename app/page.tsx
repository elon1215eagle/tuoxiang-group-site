import Image from "next/image";
import Link from "next/link";
import { AmbientSound } from "./AmbientSound";

const industryItems = [
  ["區塊鏈技術應用", "參與數位資產平台相關技術建設與應用場景規劃，推動數位經濟基礎能力。"],
  ["AI 算力基礎建設", "投入 AI 算力資源配置與技術應用布局，建構未來智慧產業發展所需底層能力。"],
  ["國際貿易整合", "透過跨境資源整合，拓展國際貿易、供應鏈網絡與新型消費品通路機會。"],
  ["兩岸產學合作", "推動產業、學研與資源交流合作，深化跨領域鏈結與長期產業協作。"],
  ["智慧餐飲系統", "以自動化設備、機器人流程與數據化 SOP，建立低人力、高標準化的餐飲模型。"],
  ["實體產業合作", "與台灣建設公司合作多項開發案，持續評估具長期價值的實體產業機會。"],
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
          <p className="hero-lead">
            以產業整合與科技應用為核心，打造跨領域、高效率、可規模化的未來商業平台。
          </p>
          <p className="hero-text">
            拓饗企業（Top Xiang Group）長期聚焦於新經濟體系與實體產業的深度融合，
            透過科技驅動與商業落地的雙軸策略，持續建構可複製、可擴張、可長期經營的產業生態系。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#industry">查看產業布局</Link>
            <Link className="button secondary" href="#film">觀看集團影片</Link>
          </div>
          <div className="hero-signals" aria-label="拓饗企業策略關鍵字">
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
            <strong>產業整合 · 科技應用 · 商業落地</strong>
          </div>
        </div>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="section-label">GROUP POSITIONING</p>
          <h2>拓饗企業是一個以新經濟與實體產業融合為核心的多元化發展集團。</h2>
        </div>
        <div className="copy-block">
          <p>
            集團願景是打造跨領域、高效率、可複製的商業模式，透過科技應用、資源整合、
            品牌營運與通路建設，持續推進具長期價值的產業布局。
          </p>
          <p>
            拓饗重視長期穩健發展、合規經營、風險控管與產業協作，所有相關業務皆依循當地法規與審查機制進行規劃，
            以建立能夠承接未來市場變化的整合型商業平台。
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
            拓饗近年積極投入多項前瞻產業，涵蓋區塊鏈技術應用、AI 算力基礎建設、
            國際貿易整合、兩岸產學合作，以及智慧餐飲創新系統。
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
          <h2>吃吧智慧餐飲系統，建立低人力、高標準化的餐飲創新模型。</h2>
        </div>
        <div className="copy-block">
          <p>
            在餐飲創新領域，拓饗推出「吃吧」智慧餐飲系統，導入自動化設備與機器人流程設計，
            以降低人力依賴、提升營運效率，並回應餐飲業長期缺工與標準化管理需求。
          </p>
          <p>
            吃吧透過機器人作業流程、半自動化廚房設備、SOP 數據化管理與低人力營運設計，
            降低人事成本與營運風險，同時提升出餐穩定度與擴張速度，具備連鎖化與加盟複製潛力。
          </p>
          <Link className="text-link" href="/chiba">進入吃吧事業介紹</Link>
        </div>
      </section>

      <section className="section" id="brand">
        <div className="section-heading">
          <p className="section-label">BRAND & CHANNEL</p>
          <h2>品牌與通路</h2>
          <p>
            妍沁國際為拓饗企業旗下核心品牌營運公司，專注於產品選品、品牌建構與通路經營。
          </p>
        </div>
        <div className="business-grid">
          <article className="business-card">
            <span className="card-kicker">品牌營運公司</span>
            <h3>妍沁國際</h3>
            <p>
              妍沁以「自然嚴選」為產品核心理念，結合供應鏈整合能力與市場趨勢洞察，
              持續開發具差異化與長期價值的商品組合。
            </p>
            <ul>
              <li>產品選品與品牌建構</li>
              <li>供應鏈整合與市場趨勢洞察</li>
              <li>具差異化與長期價值的商品組合</li>
            </ul>
          </article>
          <article className="business-card accent">
            <span className="card-kicker">直銷電商平台</span>
            <h3>買吧商城</h3>
            <p>
              買吧商城為妍沁國際旗下核心電商平台，採用「直銷＋電商」融合模式，
              結合社群推廣與數據化管理，打造新型態分潤經濟體系。
            </p>
            <ul>
              <li>嚴選商品策略</li>
              <li>創新獎金制度</li>
              <li>社群裂變機制與數位化管理</li>
            </ul>
            <Link className="text-link" href="/buyba">進入買吧事業介紹</Link>
          </article>
        </div>
      </section>

      <section className="section operating-section">
        <div>
          <p className="section-label">CORE VALUE</p>
          <h2>科技為底、通路為橋、品牌為核。</h2>
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
          <h2>拓饗集團形象影片</h2>
          <p>
            以影像呈現拓饗企業的產業視野、科技應用、品牌通路與智慧餐飲布局。
          </p>
        </div>
        <div className="video-frame">
          <video controls preload="metadata" poster="/tuoxiang-logo-horizontal.png">
            <source src="/tuoxiang-group-v2-web.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT</p>
        <h2>合作洽詢</h2>
        <p>
          歡迎產業合作、技術應用、品牌通路、國際貿易、智慧餐飲與事業投資合作夥伴洽詢。
        </p>
        <div className="contact-actions">
          <Link className="button primary" href="/buyba">買吧合作</Link>
          <Link className="button secondary" href="/chiba">吃吧合作</Link>
        </div>
      </section>
    </main>
  );
}
