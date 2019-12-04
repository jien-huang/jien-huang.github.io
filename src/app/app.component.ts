import { Component } from '@angular/core';
import { GraphQLClient } from 'graphql-request';


const endpoint = 'https://api.github.com/graphql';

const key= atob("YzA4Njc3N2VmZjVkMmJlN2RlYWE4ZDk3MzRhY2I4N2Y2MmIwMDg0OQo=")

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `bearer ${key}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
});

const Http = (query = "", variables = {}, alive = false) => new Promise((resolve, reject) => {
  graphQLClient.request(query, variables).then((res) => {
    resolve(res);
  }).catch((error) => {
    reject(error);
  });
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'www.automation-test.com';
  intro = '<h1>No. 1 Rule</h1>\n<ol>\n<li>Keep the unit test coverage rate above 90% .</li>\n<li>Refactor it at least once per week.</li>\n<li>Make it workable, then beautify it.</li>\n</ol>';
  about = '<h1>No. 1 Rule</h1>\n<ol>\n<li>Keep the unit test coverage rate above 90% .</li>\n<li>Refactor it at least once per week.</li>\n<li>Make it workable, then beautify it.</li>\n</ol>';
}
