window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie')) {
    moviePage();
  } else if (location.hash.startsWith('#category')) {
    categoriesPage();
  } else {
    homePage();
  }
  location.hash
}

function homePage() {
  console.log('Home!!');
  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');
}

function moviePage() {
  console.log('Movie!!');
}

function searchPage() {
  console.log('Search!!');
}

function trendsPage() {
  console.log('TRENDS!!');
}