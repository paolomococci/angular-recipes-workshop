import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.')
  }

}
