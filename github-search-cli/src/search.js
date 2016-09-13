import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import moment from 'moment';

@inject(HttpClient)
export class Search {
  searchTerm = 'aurelia';
  language='javascript'
  pushedAfter = '';
  searchUrl;
  sortBy = 'stargazers_count';
  sortDirection = 'descending';
  repos = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com');
    });

    this.http = http;
  }


  findRepos() {
    $('#results').hide();
    let updatedClause = this.pushedAfter ? `+pushed:>${moment(this.pushedAfter).format('YYYY-MM-DD') }` : '';
    // `search/repositories?q=aurelia pushed:>=2016-02-01 fork:only&type=Repositories
    this.searchUrl = `/search/repositories?q=${this.searchTerm}+language:${this.language}${updatedClause}&sort=stars&order&per_page=100`;
    return this.http.fetch(this.searchUrl)
      .then(response => response.json())
      .then(repos => this.repos = repos.items)
      .then(() => $('#results').fadeIn());
  }

  setSort(field, direction) {
    this.sortBy = field;
    this.sortDirection = direction;
    $('table th').removeClass('active');
    $('table th#' + field.replace('.','_')).addClass('active');
  }
}
