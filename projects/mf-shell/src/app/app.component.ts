import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';

  public channelPayment$: Observable<number> = this.commonsLibService.channelPayment;

  constructor(
    private commonsLibService: CommonsLibService
  ) {}
}
