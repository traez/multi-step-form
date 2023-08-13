{selectedAddonTerm.map((addon, index) => (
  <div className={`secd3-addons ${formData.selectedAddons.includes(addon.type) ? 'secd3-addons-selected' : ''}`} key={index}>
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