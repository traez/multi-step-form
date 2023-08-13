/* mobile View third step of a multi-step form, allows users to customize their subscription by selecting add-ons that enhance their gaming experience */
export default function MobileDesignStep3({
  handleBack,
  handleNext,
  formData,
  handleAddonPick,
}) {

  const selectedAddonTerm = formData.addons[formData.planTerm];

  return (
    <div className="root-mob">
      <main className="main-mob">
        <aside className="asmob">
          <menu className="asmob-menu asmob-clear">1</menu>
          <menu className="asmob-menu asmob-clear">2</menu>
          <menu className="asmob-menu asmob-selected">3</menu>
          <menu className="asmob-menu asmob-clear">4</menu>
        </aside>

        <section className="sec3">
          <article className="sec3-art">
            <h1 className="sec3-h1">Pick add-ons</h1>
            <h2 className="sec3-h2">
              Add-ons help enhance your gaming experience.
            </h2>

            {selectedAddonTerm.map((addon, index) => (
              <div className={`sec3-addons ${formData.selectedAddons.includes(addon.type) ? 'sec3-addons-selected' : ''}`} key={index}>
                <input
                  type="checkbox"
                  className="sec3-input"
                  onChange={() => handleAddonPick(addon.type)}
                  checked={formData.selectedAddons.includes(addon.type)}
                />
                <div>
                  <div className="sec3-addons-type">{addon.type}</div>
                  <div className="sec3-addons-desc">{addon.description}</div>
                </div>
                <div>{addon.cost}</div>
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
