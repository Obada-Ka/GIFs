# GIFs

* This a project for displaying GIFs using Angular v9. It is consisted of two modules (Static, Gifs-section) which will be loaded depending on lazy loading.

* The main idea to have several reusable components like (gif-card, gif-search, ...) to be used in different modules regardless the specified one (Gifs-section).

* **Static**: contains page for undisered urls.

* **Gifs-section**: contains a module (gifs-main) which has pages that have components (gifs-main.component) that will be rendered using routing, and components folder for reusable components:
   * gif-grid.component.
   * gif-card.component.
   * gif-search.component.
   * gif-favorite.

* **Config**: a folder for project's configuration, like AppConfig.ts to handle endpoints and apiKey.

* **Models**: a folder for interfaces and classes that are used to process received data from APIs.



## Installation
run npm install.

## Usage

* Running the project will immediately display the main UI of the project. Any other urls will be directed to the 404 page.
* GIFs will be loaded and you will have the ability to expand for more details on each GIF and chose your favorite GIFs.
* Navbar: search for specific GIFs or Show your favorite GIFs


## Packages
1. Angular Materials: in order to use different elements like MatButtons, MatGridList, so on so forth.
2. ngx-infinite-scroll: to handle scrolling event in order to catch the end of the page to load new GIFs.

## APIs
1. Get by IDs (comma sparated).
2. Search.
3. Trending.
