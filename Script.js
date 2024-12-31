const toggleButton = document.getElementById("toggle-button");
const closeButton = document.getElementById("close-button");
const sidebar = document.getElementById("sidebar");
const navItems = document.querySelectorAll(".navb");
const Body = document.body;
const dmbtn = document.getElementById("dm");
const maincnt = document.getElementById("main-content");
const navSearchBtn = document.getElementById("nav-search");
const navAboutBtn = document.getElementById("nav-about");
const navSettingsBtn = document.getElementById("nav-settings");
const navHomeBtn = document.getElementById("nav-home");

function showLoadingOverlay() {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  loadingOverlay.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loadingOverlay);
}

function hideLoadingOverlay() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.remove();
  }
}

toggleButton.addEventListener("click", () => {
  sidebar.classList.add("show");
  toggleButton.classList.add("hide");
  closeButton.classList.add("show");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
  toggleButton.classList.remove("hide");
  closeButton.classList.remove("show");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove("show");
    toggleButton.classList.remove("hide");
    closeButton.classList.remove("show");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => navItem.classList.remove("selected"));
    item.classList.add("selected");
  });
});

if (localStorage.getItem("darkMode") === "enabled") {
  Body.classList.add("dmode");
} else {
  Body.classList.remove("dmode");
}

function DarkMode() {
  showLoadingOverlay();
  setTimeout(() => {
    Body.classList.toggle("dmode");
    if (Body.classList.contains("dmode")) {
      localStorage.setItem("darkMode", "enabled");
      dmbtn.innerHTML = "Light Mode";
    } else {
      localStorage.setItem("darkMode", "disabled");
      dmbtn.innerHTML = "Dark Mode";
    }
    hideLoadingOverlay();
  }); // Simulate loading time
}

navSearchBtn.addEventListener("click", () => {
  maincnt.innerHTML = `
    <section id="search" class="search">
      <div class="container serc">
        <h4 class="mb-4">Search for a <span class="frymain">Recipe</span></h4>
        <input type="text" placeholder="Search for a recipe..." class="search-bar" spellcheck="false" id="searchval" />
        <button class="searchbtn" id="searchbtn">
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
      </div>
      <div class="container mb-3" id="searchresults"></div>
    </section>`;
  
  const searchbtn = document.getElementById("searchbtn");
  const searchresults = document.getElementById("searchresults");
  
  searchbtn.addEventListener("click", () => {
    getRecipes(searchresults);
  });
});

navAboutBtn.addEventListener("click", () => {
  showLoadingOverlay();
  setTimeout(() => {
    maincnt.innerHTML = `
      <section id="About" class="about">
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <h2 class="col-12 col-md-6">The <span class="frymain">Developer</span></h2>
            </div>
            <div class="col-12 mt-4">
              <div class="col-md-12 m-auto borders d-flex align-items-center flex-wrap">
                <div class="col-12 col-md-4 text-center">
                  <img src="fry&herb/Fry&Herb web main.png" alt="Developer 3" class="img-fluid rounded-circle mb-2">
                </div>
                <div class="ms-3 col-12 col-md-4 text-center text-md-start">
                  <h2>Vhmed</h2>
                  <p class="frymain">Front-end Developer - Ui/UX Designer</p>
                </div>
                <div class="d-flex col-12 col-md-4 justify-content-center justify-content-lg-center">
                  <a href="https://www.behance.net/Ahmed_Hossam16" class="text-decoration-none btn1 m-2" target="_blank">
                    <i class="fa-brands fa-square-behance"></i> Behance
                  </a>
                  <a href="https://github.com/Vhmed-hossam" class="text-decoration-none btn1 m-2" target="_blank">
                    <i class="fa-brands fa-square-github"></i> Github
                  </a>
                </div>
                <div class="d-flex col-md-8 justify-content-center justify-content-lg-center">
                  <p>
                    Young and eager frontend developer with a keen interest in
                    creating eye-catching and easy-to-use designs. Shows skill in
                    designing and coding flexible and intuitive web applications
                    using current frameworks and technologies like React.js.
                    Stands out in blending creative UI/UX designs with high
                    performance to give users a top-quality experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="container mt-5">
              <h2 class="mb-2">Message Me</h2>
              <div class="d-flex flex-wrap ">
                <a class="col-12 col-md-12" target="_blank">
                <input type="text" placeholder="Send a Feedback!" class="search-bar col-12 col-md-8 mb-2 mb-md-0" spellcheck="false" id="searchval"></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWgZzQCWKzQKwsCtjwTVbDmSkctlbHcQtGSsJjLtljmVGMgWRsccVzXtgQHjPNwmvrMLB" target="_blank">
                  <button class="emailbtn" id="searchbtn">
                    <i class="fa-solid fa-envelope"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    hideLoadingOverlay();
  }); 
});

navSettingsBtn.addEventListener("click", () => {
  showLoadingOverlay();
  setTimeout(() => {
    maincnt.innerHTML = `
      <section id="Settings" class="settings">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>Settings</h2>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <div class="text-center">
                <div class="m-auto">
                  <p>Mode</p>
                  <button id="dm" class="btn1" onclick="DarkMode()">Switch Modes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    hideLoadingOverlay();
  });
});

navHomeBtn.addEventListener("click", () => {
  showLoadingOverlay();
  setTimeout(() => {
    maincnt.innerHTML = `
      <section id="home" class="home">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>Welcome to <span class="frymain">Fry&Herb</span></h2>
              <p class="mt-2">A place where you can find your favorite recipes</p>
            </div>
            <div class="col-lg-12 borders mt-4 p-2">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h2 class="mb-2">Our <span class="frymain">Services</span></h2>
                  <p class="w-75">At <span class="frymain">Fry&Herb</span>, we’re passionate about making cooking easy, enjoyable, and accessible to everyone. Explore a vast collection of carefully curated recipes, step-by-step cooking guides, and tips to help you create delicious meals.</p>
                </div>
                <div>
                  <img src="fry&herb/Fry&Herb web logo.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="borders newsection mt-4">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2>Find Your <span class="frymain">Way</span>.</h2>
                  <p class="mt-2">Journey through our website.</p>
                </div>
                <div class="col-md-6 col-lg-4 mt-3">
                  <div class="borders p-3">
                    <div>Home</div>
                    <p class="thep">Discover a world of culinary delights right from the comfort of your home. Explore our extensive collection of recipes and start cooking today!</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-3">
                  <div class="borders p-3">
                    <div>Search</div>
                    <p class="thep">The section where you can search for food recipes, that is your main goal.</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-3">
                  <div class="borders p-3">
                    <div>About</div>
                    <p class="thep">The section where you find out more about us.</p>
                  </div>
                </div>
                <div class="col-md-12 mt-3">
                  <div class="borders p-3">
                    <div>Settings</div>
                    <p class="thep">Customize your experience on our website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    hideLoadingOverlay();
  }); // Simulate loading time
});

async function getRecipes(searchresults) {
  try {
    const searchval = document.getElementById("searchval").value;
    if (searchval.length === 0) {
      alert("Please enter a search value");
      return;
    }
    showLoadingOverlay();
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchval}`);
    const { recipes } = await response.json();
    if (!recipes || recipes.length === 0) {
      alert("No recipes found");
    } else {
      searchres(recipes, searchresults);
    }
  } catch (error) {
    console.log("Failed to fetch recipes:", error);
    searchresults.innerHTML = '<div class="error">Failed to fetch recipes. Please try again later.</div>';
  } finally {
    hideLoadingOverlay();
  }
}

function searchres(data, searchresults) {
  searchresults.innerHTML = '';
  searchresults.innerHTML += data
    .map(
      (recipe, index) => `
      <div class="row mb-2" id="card-${index}">
        <div class="col-md-12">
          <div class="d-flex justify-content-between">
            <div class="h-100 col-md-1 text-center bordered p-2 mt-2">
              <h2>${index}</h2>
            </div>
            <div class="d-flex col-lg-11 borders bbottom p-2">
              <div class="img me-3">
                <img src="${recipe.image_url}" class="img-fluid" />
              </div>
              <div class="d-flex flex-column justify-content-between w-100">
                <div>
                  <div class="d-flex w-100 align-items-center justify-content-between">
                    <h2 class="mb-2">${recipe.title}</h2>
                    <button class="btn2" onclick="removeCard('card-${index}')">
                      <i class="fa-solid fa-x frymain2" style="color: #03EDA3;"></i>
                    </button>
                  </div>
                  <p>By <a href="${recipe.publisher_url}" class="frymain" target="_blank">${recipe.publisher}</a></p>
                </div>
                <div>
                  <a href="${recipe.source_url}" target="_blank">
                    <button class="btn1">Get Full Recipe</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');
}

function removeCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.remove();
  }
}
window.addEventListener('load', () => {
  showLoadingOverlay();
  setTimeout(() => {
    hideLoadingOverlay();
  }, 1000);
});
