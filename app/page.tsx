import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>2026</p>
          <h1 className={styles.heroTitle}>
            더 스카우트<br />
            <span className={styles.heroAccent}>in 강원</span>
          </h1>
          <p className={styles.heroSubtitle}>
            강원의 자연을 탐색하며<br />
            미션을 수행하는 야외형 미션 플레이
          </p>
          <div className={styles.heroBadge}>
            <span className={styles.dot} />
            모집 중
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>ABOUT</p>
            <h2 className={styles.sectionTitle}>스카우트란?</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                <strong className={styles.highlight}>더 스카우트 in 강원</strong>은 강원도 곳곳을 무대로
                펼쳐지는 야외형 미션 플레이 콘텐츠입니다.
              </p>
              <p>
                참가자들은 자연 속에서 단서를 찾고, 협동하며 미션을 완수합니다.
                설악산에서 동해 바다까지 — 강원의 아름다운 자연이 게임의 배경이 됩니다.
              </p>
              <p>
                리얼월드가 설계한 내러티브를 따라 강원도를 탐험하세요.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>N</span>
                <span className={styles.statLabel}>개의 미션</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>강원</span>
                <span className={styles.statLabel}>전역 탐험</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>팀</span>
                <span className={styles.statLabel}>단위 플레이</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>HOW TO PLAY</p>
            <h2 className={styles.sectionTitle}>진행 방식</h2>
          </div>
          <ol className={styles.stepList}>
            {[
              { step: "01", title: "팀 구성", desc: "N명으로 팀을 구성하고 출발지에 집결합니다." },
              { step: "02", title: "미션 수령", desc: "앱을 통해 첫 번째 미션과 단서를 수령합니다." },
              { step: "03", title: "현장 탐험", desc: "강원도 각지를 이동하며 현장에서 단서를 찾습니다." },
              { step: "04", title: "미션 완수", desc: "협동과 추리로 모든 미션을 완수하고 최종 목적지에 도달합니다." },
            ].map((item) => (
              <li key={item.step} className={styles.stepItem}>
                <span className={styles.stepNumber}>{item.step}</span>
                <div>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDesc}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Course */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>COURSE</p>
            <h2 className={styles.sectionTitle}>주요 탐험지</h2>
          </div>
          <div className={styles.courseGrid}>
            {[
              { name: "설악산", tag: "자연", desc: "웅장한 산악 지형에서 펼쳐지는 탐험 미션" },
              { name: "강릉", tag: "해안", desc: "동해 바다와 커피거리를 무대로 한 도시 미션" },
              { name: "춘천", tag: "도시", desc: "닭갈비 골목과 소양강을 따라 이어지는 스토리" },
              { name: "정선", tag: "모험", desc: "아리랑의 고장에서 펼쳐지는 깊은 산골 탐험" },
            ].map((course) => (
              <div key={course.name} className={styles.courseCard}>
                <div className={styles.courseTag}>{course.tag}</div>
                <h3 className={styles.courseName}>{course.name}</h3>
                <p className={styles.courseDesc}>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <p className={styles.label}>APPLY</p>
            <h2 className={styles.ctaTitle}>참가 신청</h2>
            <p className={styles.ctaDesc}>
              강원의 자연 속으로 뛰어들 준비가 됐다면,<br />
              지금 신청하세요.
            </p>
            <a href="#" className={styles.ctaButton}>
              신청하기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerBrand}>REALWORLD</p>
          <p className={styles.footerCopy}>© 2026 유니크굿컴퍼니. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
