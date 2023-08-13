/* Mobile View fourth step of a multi-step form, presenting users with a summary of their selections and the associated costs before they confirm their choices */
export default function MobileDesignStep4({
  handleBack,
  handleConfirm,
  formData,
  totalArray,
  setCurrentStep,
}) {
  const planCosts = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const selectedPlan = formData.selectedPlan;
  const selectedTerm = formData.planTerm;

  const planTotal = planCosts[selectedPlan][selectedTerm];

  function calculateAddonPrice(addon, term) {
    const addonData = formData.addons[term].find((item) => item.type === addon);
    if (addonData) {
      return addonData.cost;
    }
    return "";
  }

  return (
    <div className="root-mob">
      <main className="main-mob">
        <aside className="asmob">
          <menu className="asmob-menu asmob-clear">1</menu>
          <menu className="asmob-menu asmob-clear">2</menu>
          <menu className="asmob-menu asmob-clear">3</menu>
          <menu className="asmob-menu asmob-selected">4</menu>
        </aside>

        <section className="sec4">
          <article className="sec4-art">
            <h1 className="sec4-h1">Finishing up</h1>
            <h2 className="sec4-h2">
              Double-check everything looks OK before confirming.
            </h2>

            <div className="sec4-selplan">
              <div className="sec4-items">
                <div className="sec4-plan">
                  {formData.selectedPlan} (
                  {formData.planTerm.charAt(0).toUpperCase() +
                    formData.planTerm.slice(1)}
                  )
                </div>
                <div className="sec4-change" onClick={() => setCurrentStep(2)}>
                  Change
                </div>
              </div>
              <div className="sec4-totals">
                ${planTotal}/{formData.planTerm === "monthly" ? "mo" : "yr"}
              </div>
            </div>

            <div className="sec4-seladdons">
              {formData.selectedAddons.length > 0 &&
                formData.selectedAddons.map((addon, index) => (
                  <div className="sec4-addonsprice" key={index}>
                    <div className="sec4-addons">{addon}</div>
                    <div className="sec4-price">
                      {calculateAddonPrice(addon, formData.planTerm)}
                    </div>
                  </div>
                ))}
            </div>

            <div className="sec4-total">
              <div className="sec4-totalword">
                Total (per {formData.planTerm === "monthly" ? "month" : "year"})
              </div>
              <div className="sec4-totalfig">
                +${totalArray.reduce((acc, amount) => acc + amount, 0)}/
                {formData.planTerm === "monthly" ? "mo" : "yr"}
              </div>
            </div>
          </article>

          <nav className="sec4-nav">
            <div className="sec4-back" onClick={handleBack}>
              Go Back
            </div>
            <button className="sec4-but" onClick={handleConfirm}>
              Confirm
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
