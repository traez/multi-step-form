/* mobile View first step of a multi-step form with specialty being to collect personal information from user */
export default function MobileDesignStep1({
  handleNextStep1,
  formData,
  handleStep1Change,
  formErrors,
  clearFormError,
}) {
  return (
    <div className="root-mob">
      <main className="main-mob">
        <aside className="asmob">
          <menu className="asmob-menu asmob-selected">1</menu>
          <menu className="asmob-menu asmob-clear">2</menu>
          <menu className="asmob-menu asmob-clear">3</menu>
          <menu className="asmob-menu asmob-clear">4</menu>
        </aside>

        <section className="sec1">
          <article className="sec1-art">
            <h1 className="sec1-h1">Personal info</h1>
            <h2 className="sec1-h2">
              Please provide your name, email address, and phone number.
            </h2>

            <div className="sec1-labinp">
              <label htmlFor="sec1-name" className="sec1-lab">
                Name
              </label>
              <input
                type="text"
                id="sec1Name"
                className="sec1-inp"
                placeholder="e.g. Stephen King"
                value={formData.sec1Name}
                onChange={(event) => {
                  handleStep1Change(event);
                  clearFormError("sec1Name"); 
                }}
              />
              {formErrors.sec1Name && (
                <i className="sec1-error">{formErrors.sec1Name}</i>
              )}
            </div>
            <div className="sec1-labinp">
              <label htmlFor="sec1-email" className="sec1-lab">
                Email Address
              </label>
              <input
                type="text"
                id="sec1Email"
                className="sec1-inp"
                placeholder="e.g. stephenking@lorem.com"
                value={formData.sec1Email}
                onChange={(event) => {
                  handleStep1Change(event);
                  clearFormError("sec1Email"); 
                }}
              />
              {formErrors.sec1Email && (
                <i className="sec1-error">{formErrors.sec1Email}</i>
              )}
            </div>
            <div className="sec1-labinp">
              <label htmlFor="sec1-phone" className="sec1-lab">
                Phone Number
              </label>
              <input
                type="text"
                id="sec1Phone"
                className="sec1-inp"
                placeholder="e.g. +1 234 567 890"
                value={formData.sec1Phone}
                onChange={(event) => {
                  handleStep1Change(event);
                  clearFormError("sec1Phone"); 
                }}
              />
              {formErrors.sec1Phone && (
                <i className="sec1-error">{formErrors.sec1Phone}</i>
              )}
            </div>
          </article>
          <nav className="sec1-nav">
            <button className="sec1-but" onClick={handleNextStep1}>
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
