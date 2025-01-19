const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// seleziono elemento di output

const listTeam = document.querySelector(".team-container");
// console.log(listTeam);


let items = "";

// output temporaneo

for (let i = 0; i < teamMembers.length; i++) {
  let membroIesimo = teamMembers[i];

  // console.log(membroIesimo);

  const {name, role, email, img} = membroIesimo;

  console.log(name, role, email, img);


  items += `
  <li>
  nome: ${name} <br>
  ruolo: ${role} <br>
  email: ${email} <br>
  immagine: ${img} <br>
  <li>`

  console.log(items);
  
  
}

listTeam.innerHTML = items;