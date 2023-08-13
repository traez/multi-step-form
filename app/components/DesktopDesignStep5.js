/* Desktop View fifth and final step of a multi-step form, presents users with a final thank-you message and confirmation after they have completed the subscription process */
export default function DesktopDesignStep5() {
  return (
    <div className="root-des">
      <main className="main-des">
        <aside className="asdes">
          <menu className="asdes-menu">
            <div className="asdes-circle asdes-clear">1</div>
            <div className="asdes-stepcontain">
              <div className="asdes-step">Step 1</div>
              <div className="asdes-steptitle">Your info</div>
            </div>
          </menu>
          <menu className="asdes-menu">
            <div className="asdes-circle asdes-clear">2</div>
            <div className="asdes-stepcontain">
              <div className="asdes-step">Step 2</div>
              <div className="asdes-steptitle">Select plan</div>
            </div>
          </menu>
          <menu className="asdes-menu">
            <div className="asdes-circle asdes-clear">3</div>
            <div className="asdes-stepcontain">
              <div className="asdes-step">Step 3</div>
              <div className="asdes-steptitle">Add-ons</div>
            </div>
          </menu>
          <menu className="asdes-menu">
            <div className="asdes-circle asdes-selected">4</div>
            <div className="asdes-stepcontain">
              <div className="asdes-step">Step 4</div>
              <div className="asdes-steptitle">Summary</div>
            </div>
          </menu>
        </aside>

        <section className="secd5">
          <article className="secd5-art">
            <div className="secd5-thankyouimg"></div>
            <div className="secd5-thankyou">Thank you!</div>
            <div className="secd5-thanks">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </div>
          </article>
        </section>

        <footer className="foot-des">
          <a
            href="https://github.com/traez/multi-step-form"
            target="_blank"
            className="foot-des-anc"
          >
            Multi-step form
          </a>
          <h4>©2023 Trae Zeeofor</h4>
        </footer>
      </main>
    </div>
  );
}
