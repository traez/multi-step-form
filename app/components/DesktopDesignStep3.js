/* Desktop View third step of a multi-step form, allows users to customize their subscription by selecting add-ons that enhance their gaming experience */
export default function DesktopDesignStep3({
  handleBack,
  handleNext,
  formData,
  handleAddonPick,
}) {
  const selectedAddonTerm = formData.addons[formData.planTerm];

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
            <div className="asdes-circle asdes-selected">3</div>
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

        <section className="secd3">
          <article className="sec3-art">
            <h1 className="sec3-h1">Pick add-ons</h1>
            <h2 className="sec3-h2">
              Add-ons help enhance your gaming experience.
            </h2>

            {selectedAddonTerm.map((addon, index) => (
              <div
                className={`secd3-addons ${
                  formData.selectedAddons.includes(addon.type)
                    ? "secd3-addons-selected"
                    : ""
                }`}
                key={index}
              >
                <input
                  type="checkbox"
                  className="sec3-input"
                  onChange={() => handleAddonPick(addon.type)}
                  checked={formData.selectedAddons.includes(addon.type)}
                />
                <div className="secd3-addons-details">
                  <div className="sec3-addons-type">{addon.type}</div>
                  <div className="secd3-addons-desc">{addon.description}</div>
                </div>
                <div className="secd3-addons-cost">{addon.cost}</div>
              </div>
            ))}
          </article>
          <nav className="sec3-nav">
            <div className="sec3-back" onClick={handleBack}>
              Go Back
            </div>
            <button className="sec3-but" onClick={handleNext}>
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
