import { Component } from '@angular/core';
import { GraphQLClient } from 'graphql-request';


const endpoint = 'https://api.github.com/graphql';

const A= "1234567890"
const B= "abcdef"

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `bearer ${A}${B}`,
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
}
