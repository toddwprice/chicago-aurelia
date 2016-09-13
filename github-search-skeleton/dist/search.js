'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch', 'moment'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, moment, _dec, _class, Search;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}, function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      _export('Search', Search = (_dec = inject(HttpClient), _dec(_class = function () {
        function Search(http) {
          _classCallCheck(this, Search);

          this.searchTerm = 'aurelia';
          this.language = 'javascript';
          this.pushedAfter = '';
          this.sortBy = 'stargazers_count';
          this.sortDirection = 'descending';
          this.repos = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com');
          });

          this.http = http;
        }

        Search.prototype.findRepos = function findRepos() {
          var _this = this;

          $('#results').hide();
          var updatedClause = this.pushedAfter ? '+pushed:>' + moment(this.pushedAfter).format('YYYY-MM-DD') : '';

          this.searchUrl = '/search/repositories?q=' + this.searchTerm + '+language:' + this.language + updatedClause + '&sort=stars&order&per_page=100';
          return this.http.fetch(this.searchUrl).then(function (response) {
            return response.json();
          }).then(function (repos) {
            return _this.repos = repos.items;
          }).then(function () {
            return $('#results').fadeIn();
          });
        };

        Search.prototype.setSort = function setSort(field, direction) {
          this.sortBy = field;
          this.sortDirection = direction;
          $('table th').removeClass('active');
          $('table th#' + field.replace('.', '_')).addClass('active');
        };

        return Search;
      }()) || _class));

      _export('Search', Search);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwibW9tZW50IiwiU2VhcmNoIiwiaHR0cCIsInNlYXJjaFRlcm0iLCJsYW5ndWFnZSIsInB1c2hlZEFmdGVyIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlcG9zIiwiY29uZmlndXJlIiwiY29uZmlnIiwidXNlU3RhbmRhcmRDb25maWd1cmF0aW9uIiwid2l0aEJhc2VVcmwiLCJmaW5kUmVwb3MiLCIkIiwiaGlkZSIsInVwZGF0ZWRDbGF1c2UiLCJmb3JtYXQiLCJzZWFyY2hVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpdGVtcyIsImZhZGVJbiIsInNldFNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsInJlbW92ZUNsYXNzIiwicmVwbGFjZSIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsWSxxQkFBQUEsTTs7QUFDQUMsZ0IsdUJBQUFBLFU7O0FBRURDLFk7Ozt3QkFHTUMsTSxXQURaSCxPQUFPQyxVQUFQLEM7QUFVQyx3QkFBWUcsSUFBWixFQUFrQjtBQUFBOztBQUFBLGVBUmxCQyxVQVFrQixHQVJMLFNBUUs7QUFBQSxlQVBsQkMsUUFPa0IsR0FQVCxZQU9TO0FBQUEsZUFObEJDLFdBTWtCLEdBTkosRUFNSTtBQUFBLGVBSmxCQyxNQUlrQixHQUpULGtCQUlTO0FBQUEsZUFIbEJDLGFBR2tCLEdBSEYsWUFHRTtBQUFBLGVBRmxCQyxLQUVrQixHQUZWLEVBRVU7O0FBQ2hCTixlQUFLTyxTQUFMLENBQWUsa0JBQVU7QUFDdkJDLG1CQUNHQyx3QkFESCxHQUVHQyxXQUZILENBRWUsd0JBRmY7QUFHRCxXQUpEOztBQU1BLGVBQUtWLElBQUwsR0FBWUEsSUFBWjtBQUNEOzt5QkFHRFcsUyx3QkFBWTtBQUFBOztBQUNWQyxZQUFFLFVBQUYsRUFBY0MsSUFBZDtBQUNBLGNBQUlDLGdCQUFnQixLQUFLWCxXQUFMLGlCQUErQkwsT0FBTyxLQUFLSyxXQUFaLEVBQXlCWSxNQUF6QixDQUFnQyxZQUFoQyxDQUEvQixHQUFrRixFQUF0Rzs7QUFFQSxlQUFLQyxTQUFMLCtCQUEyQyxLQUFLZixVQUFoRCxrQkFBdUUsS0FBS0MsUUFBNUUsR0FBdUZZLGFBQXZGO0FBQ0EsaUJBQU8sS0FBS2QsSUFBTCxDQUFVaUIsS0FBVixDQUFnQixLQUFLRCxTQUFyQixFQUNKRSxJQURJLENBQ0M7QUFBQSxtQkFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsV0FERCxFQUVKRixJQUZJLENBRUM7QUFBQSxtQkFBUyxNQUFLWixLQUFMLEdBQWFBLE1BQU1lLEtBQTVCO0FBQUEsV0FGRCxFQUdKSCxJQUhJLENBR0M7QUFBQSxtQkFBTU4sRUFBRSxVQUFGLEVBQWNVLE1BQWQsRUFBTjtBQUFBLFdBSEQsQ0FBUDtBQUlELFM7O3lCQUVEQyxPLG9CQUFRQyxLLEVBQU9DLFMsRUFBVztBQUN4QixlQUFLckIsTUFBTCxHQUFjb0IsS0FBZDtBQUNBLGVBQUtuQixhQUFMLEdBQXFCb0IsU0FBckI7QUFDQWIsWUFBRSxVQUFGLEVBQWNjLFdBQWQsQ0FBMEIsUUFBMUI7QUFDQWQsWUFBRSxjQUFjWSxNQUFNRyxPQUFOLENBQWMsR0FBZCxFQUFrQixHQUFsQixDQUFoQixFQUF3Q0MsUUFBeEMsQ0FBaUQsUUFBakQ7QUFDRCxTIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
