import { Component } from '@angular/core';
import { GraphQLClient } from 'graphql-request';


const endpoint = 'https://api.github.com/graphql';

const key = atob("YzA4Njc3N2VmZjVkMmJlN2RlYWE4ZDk3MzRhY2I4N2Y2MmIwMDg0OQo=")

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
  intro = '';
  about = '';
  instance = '';
  script = '';

  query_str = `{
    search(query: "repo:jien-huang/jien-huang.github.io label:internal" type: ISSUE, first: 100) {
      nodes {
        ... on Issue {
          number
          title
          bodyHTML
        }
      }
    }
  }`

  ngOnInit() {
    Http(this.query_str).then(res => {
      var nodes = res['search']['nodes'];
      this.about = this.getHtmlByTitle(nodes, 'About');
      this.intro = this.getHtmlByTitle(nodes, 'Introduction');
      this.instance = this.getHtmlByTitle(nodes, 'Instance');
      this.script = this.getHtmlByTitle(nodes, 'Script');
    })
  }

  private getHtmlByTitle(nodes: any, title: string): string {
    var node = nodes.find(el => el.title === title);
    if (node) {
      return node.bodyHTML;
    }
  }
}
