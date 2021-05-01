import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  content!: { [key: string]: any } | null;
  constructor(private http: HttpClient) {}
  /**
   * get about us page data from lsnetx.com
   * and render it.
   */
  async getAboutUsData() {
    try {
      const data = { params: { companyId: '3', contentId: '10' } };
      let resp: any = await this.http
        .get('https://webservice.lsnetx.com/fetch/content', data)
        .toPromise();
      if (resp?.dataEntryModel && !resp?.errorFlag) {
        this.content = resp.dataEntryModel;
      }
    } catch (error) {
      console.error(error);
      this.content = null;
    }
  }

  ngOnInit() {
    this.getAboutUsData();
  }
}
