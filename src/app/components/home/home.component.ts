import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contentText!: string | null;
  constructor(private http: HttpClient) {}
  /**
   * get a medium post and display content
   */
  async getPostData() {
    try {
      const mediumRssFeed = 'https://medium.com/feed/coffee-driven-dev';
      const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
      const options = { params: { rss_url: mediumRssFeed } };
      let data: any = await this.http.get(rssToJsonApi, options).toPromise();
      if (data?.status === 'ok' && data?.items?.length) {
        this.contentText = data.items[0].content;
      }
    } catch (error) {
      console.error(error);
      this.contentText = null;
    }
  }

  ngOnInit() {
    this.getPostData();
  }
}
