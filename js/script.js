let profiles = [
  {
    name: "Peg Legge",
    designation: "CEO",
    image: "Peg_Legge",
  },
  {
    name: "Richard Guerra",
    designation: "CTO",
    image: "Richard Guerra",
  },
  {
    name: "Alexandra Stolz",
    designation: "DESIGNER",
    image: "Alexandra Stolz",
  },
  {
    name: "Janet Bray",
    designation: "DEVELOPER",
    image: "Janet Bray",
  },
];

let profileContainer = document.getElementById("team__profiles");

profiles.map((profile) => {
  profileContainer.innerHTML += `
      <div class="team__profiles--profile">
        <img class="profile__img" src="./assets/media/images/${profile.image}.png" alt="${profile.name}">
        <h3 class="profile__name">${profile.name}</h3>
        <p class="profile__designation">${profile.designation}</p>
      </div>
    `;
});



