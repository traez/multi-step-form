/* Desktop View second step of a multi-step form for selecting a subscription plan and billing term */
export default function DesktopDesignStep2({
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
            <div className="asdes-circle asdes-selected">2</div>
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
            <div className="asdes-circle asdes-clear">4</div>
            <div className="asdes-stepcontain">
              <div className="asdes-step">Step 4</div>
              <div className="asdes-steptitle">Summary</div>
            </div>
          </menu>
        </aside>

        <section className="secd2">
          <article className="sec2-art">
            <h1 className="sec2-h1">Select your plan</h1>
            <h2 className="sec2-h2">
              You have the option of monthly or yearly billing.
            </h2>

            <div className="secd2-plans-container">
              {plansData.map((planData) => (
                <div
                  className={`secd2-plans ${
                    selectedPlan === planData.type ? "secd2-selected" : ""
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
            </div>

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
