/* mobile View fifth and final step of a multi-step form, presents users with a final thank-you message and confirmation after they have completed the subscription process */
export default function MobileDesignStep5() {
  return (
    <div className="root-mob">
      <main className="main-mob">
        <aside className="asmob">
          <menu className="asmob-menu asmob-clear">1</menu>
          <menu className="asmob-menu asmob-clear">2</menu>
          <menu className="asmob-menu asmob-clear">3</menu>
          <menu className="asmob-menu asmob-selected">4</menu>
        </aside>

        <section className="sec5">
          <article className="sec5-art">
            <div className="sec5-thankyouimg"></div>
            <div className="sec5-thankyou">Thank you!</div>
            <div className="sec5-thanks">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </div>
          </article>
        </section>

        <footer className="foot-mob">
          <a
            href="https://github.com/traez/multi-step-form"
            target="_blank"
            className="foot-mob-anc"
          >
            Multi-step form
          </a>
          <h4>©2023 Trae Zeeofor</h4>
        </footer>
      </main>
    </div>
  );
}
