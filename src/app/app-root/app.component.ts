import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
  public title = 'learn-phrases';
}
