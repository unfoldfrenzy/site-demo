async function loadVendors() {
  const res = await fetch("/data/vendors.json");
  return await res.json();
}

function renderVendors(vendors) {
  const grid = document.getElementById("vendorGrid");
  grid.innerHTML = "";

  vendors.forEach(v => {
    const card = document.createElement("div");
    card.className = "vendor-card p-6";
    card.innerHTML = `
      <img src="${v.logo}" class="h-12 mb-4" alt="${v.name} logo" />
      <h3 class="text-xl font-semibold mb-2">${v.name}</h3>
      <p class="text-gray-600 mb-2">${v.summary}</p>
      <p class="text-sm text-gray-800 font-medium mb-2">Price: <span class="text-blue-600">${v.pricing.base_price}</span></p>
      <p class="text-sm text-gray-700 mb-3">Features: ${v.features.join(", ")}</p>
      <a href="/benchmark/${v.id}.html" class="text-blue-500 hover:underline text-sm">View details →</a>
    `;
    grid.appendChild(card);
  });
}

function applyFilters(vendors) {
  const maxPrice = parseInt(document.getElementById("priceFilter").value);
  const feature = document.getElementById("featureFilter").value;
  const emp = document.getElementById("employeeFilter").value;

  return vendors.filter(v => {
    let priceStr = v.pricing.base_price || "";
    let price = 0;
    const m = priceStr.match(/\d[\d,]*/);
    if (m) price = parseInt(m[0].replace(/,/g,''));
    const hasFeature = feature === "any" || v.features.some(f => f.toLowerCase().includes(feature.toLowerCase()));
    const empOK = emp === "any" || (v.employees && parseInt(v.employees) <= parseInt(emp));
    return price <= maxPrice && hasFeature && empOK;
  });
}

(async function () {
  const vendors = await loadVendors();
  renderVendors(vendors);

  document.getElementById("priceFilter").oninput = () => {
    document.getElementById("priceValue").innerText = document.getElementById("priceFilter").value;
    renderVendors(applyFilters(vendors));
  };

  document.getElementById("featureFilter").onchange = () => renderVendors(applyFilters(vendors));
  document.getElementById("employeeFilter").onchange = () => renderVendors(applyFilters(vendors));
})();
