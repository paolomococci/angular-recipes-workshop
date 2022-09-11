import {
  Component,
  OnInit
} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  message = new FormControl('info about the action offered by this button')

  constructor() { }

  ngOnInit(): void {
  }

}
