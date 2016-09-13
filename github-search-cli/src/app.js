// export class App {
//   constructor() {
//     this.message = 'Hello Chicago Aurelians!';
//   }
// }


export class App {
  configureRouter(config, router) {
    config.title = 'Chicago Aurelia';
    config.map([
      { route: ['', 'search'], name: 'search', moduleId: 'search', nav: true, title: 'Search', settings: { html: '<i class="fa fa-search"></i> Search' } },
      { route: ['todos'], name: 'todos', moduleId: 'todos', nav: true, title: 'ToDos', settings: { html: '<i class="fa fa-check"></i> ToDos' } },
      { route: ['folders'], name: 'folders', moduleId: 'folders', nav: true, title: 'Folders', settings: { html: '<i class="fa fa-folder-open"></i> Folders' } }
    ]);

    this.router = router;
  }
}
