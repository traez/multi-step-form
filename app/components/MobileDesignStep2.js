/* mobile View second step of a multi-step form for selecting a subscription plan and billing term */
export default function MobileDesignStep2({
  handleBack,
  handleNext,
  formData,
  handlePlanClick,
  handlePlanTermToggle,
}) {
  const selectedPlan = formData.selectedPlan;
  const planTerm = formData.planTerm;
  const plansData = formData.plans[planTerm];

  return (
    <div className="root-mob">
      <main className="main-mob">
        <aside className="asmob">
          <menu className="asmob-menu asmob-clear">1</menu>
          <menu className="asmob-menu asmob-selected">2</menu>
          <menu className="asmob-menu asmob-clear">3</menu>
          <menu className="asmob-menu asmob-clear">4</menu>
        </aside>

        <section className="sec2">
          <article className="sec2-art">
            <h1 className="sec2-h1">Select your plan</h1>
            <h2 className="sec2-h2">
              You have the option of monthly or yearly billing.
            </h2>

            {plansData.map((planData) => (
              <div
                className={`sec2-plans ${
                  selectedPlan === planData.type ? "sec2-selected" : ""
                }`}
                onClick={() => handlePlanClick(planData.type)}
                key={planData.type}
              >
                <div
                  className={`sec2-icon-${planData.type.toLowerCase()}`}
                ></div>
                <div>
                  <div className="sec2-plans-type">{planData.type}</div>
                  <div className="sec2-plans-rate">{planData.rate}</div>
                  {planData.free && (
                    <div className="sec2-plans-free">{planData.free}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="sec2-option">
              <div className="sec2-monthly">Monthly</div>
              <div className="sec2-toggler">
                <input
                  type="checkbox"
                  id="toggler"
                  className="sec2-checkbox"
                  checked={planTerm === "yearly"}
                  onChange={handlePlanTermToggle}
                />
                <label htmlFor="toggler" className="sec2-switch">
                  {" "}
                </label>
              </div>
              <div className="sec2-yearly">Yearly</div>
            </div>
          </article>

          <nav className="sec2-nav">
            <div className="sec2-back" onClick={handleBack}>
              Go Back
            </div>
            <button className="sec2-but" onClick={handleNext}>
              Next Step
            </button>
          </nav>
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
