import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone:false
})
export class ArticleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  async vibrate(): Promise<void> {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
}
