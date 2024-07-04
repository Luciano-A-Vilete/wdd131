document.addEventListener('DOMContentLoaded', function() {
    // Set footer copyright year
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    document.getElementById('currentyear').innerText = currentYear;
    
    // Set footer last modified date
    document.getElementById('lastModified').innerText = document.lastModified;
    
    // Add event listener to the menu button
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
       
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Boise Idaho",
      location: "Boise, Idaho, United States",
      dedicated: "1984, May, 25",
      area: 35868,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
    },
    {
      templeName: "Durban South Africa",
      location: "Durban, South Africa",
      dedicated: "2020, February, 16",
      area: 19860,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
    },
    // Add more temple objects here...
  ];


  let itemMenu = document.querySelectorAll('.item-menu');

  itemMenu.forEach( menu => {
    menu.addEventListener( 'click', function(){
      let menuRel = menu.getAttribute('rel');
      let filteredData;
      if( menuRel == 'old' || menuRel == 'new' )
      {

        if( menuRel == 'old') {
          filteredData = temples.filter(temple => !checkOldNew(temple.dedicated));
        }else{
          filteredData = temples.filter(temple => checkOldNew(temple.dedicated));
        }
      }
      else if(menuRel == 'large' || menuRel == 'small'){
        if( menuRel == 'large') {
          filteredData = temples.filter( temple => temple.area>90000);
        }else{
          filteredData = temples.filter( temple =>temple.area<10000);
        }
  
      }
      else {

        filteredData = temples.filter( temple => temple !== undefined );
      }
      
      createTemplateCard(filteredData);
    });
  });
  
  function checkOldNew( dateOldNew ) {
    const date1 = new Date(dateOldNew)
    return date1.getFullYear() > 1999;
  }


  createTemplateCard(temples);

//  document.addEventListener("DOMContentLoaded", () => {
//     const templeCard = document.getElementById("templeContainer");

function createTemplateCard(filteredTemples) {
    // contenedor.innerHTML = '';

    document.querySelector('.res-grid').innerHTML = '';
    
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute ("src", temple.imageUrl);
        img.setAttribute ("alt", `${temple.templeName} Temple`);
        img.setAttribute ("loading", "lazy");

        card.appendChild (name);
        card.appendChild (location);
        card.appendChild (dedication);
        card.appendChild (area);
        card.appendChild (img);
        card.setAttribute('class', 'col-3');

        document.querySelector('.res-grid').appendChild(card);

    });
}

// function displayTemples(filteredTemples) {
//   templeContainer.innerHTML = '';
//   filteredTemples.forEach(createTempleCard);
// }

// function filterTemples(menu) {
//   let filteredTemples = temples;

//   switch (citem-menu) {
//       case 'Old':
//           filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//           break;
//       case 'New':
//           filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//           break;
//       case 'Large':
//           filteredTemples = temples.filter(temple => temple.area > 90000);
//           break;
//       case 'Small':
//           filteredTemples = temples.filter(temple => temple.area < 10000);
//           break;
//       case 'Home':
//       default:
//           filteredTemples = temples;
//           break;
//   }

//   displayTemples(filteredTemples);
// }

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//       const criteria = item.dataset.criteria;
//       filterTemples(criteria);
//   });
// });


    