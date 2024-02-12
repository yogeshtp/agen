let bills = [
  {
    billType: "Basic",
    price: 100,
  },
  {
    billType: "Plus",
    price: 250,
  },
  {
    billType: "Pro",
    price: 400,
  },
];
bills.map((bill) => {
  document.getElementById("plans__billing").innerHTML += `
    <div class="plans__billing--bill">
    <h4 class="bill__type">${bill.billType}</h4>
    <div class="bill__amount">
        <span class="bill__amount--value">$${bill.price}</span>
        <span class="bill__amount--duration">/month</span>
    </div>
    <p class="bill__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor
        aperiam
    </p>
    <ul>
        <li>Lorem ipsum, dolor sit </li>
        <li>Lorem ipsum, dolor sit </li>
        <li>Lorem ipsum, dolor sit </li>
        <li>Lorem ipsum, dolor sit </li>
        <li>Lorem ipsum, dolor sit </li>
    </ul>
    <button class="bill__btn">Learn More</button>
  </div>
    `;
});
