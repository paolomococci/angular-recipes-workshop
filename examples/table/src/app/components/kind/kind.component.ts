import {
  Component,
  OnInit
} from '@angular/core'

import { Element } from 'src/app/models/element.model'

const ELEMENT_DATA: Element[] = [
  {atomic:1, symbol:'H', name:'Hydrogen', group:'Nonmetal', mass:1.0079, weight:1, radioactive:false, artificially:false},
  {atomic:2, symbol:'He', name:'Helium', group:'Noble Gas', mass:4.0026, weight:4, radioactive:false, artificially:false},
  {atomic:3, symbol:'Li', name:'Lithium', group:'Alkali Metal', mass:6.941, weight:7, radioactive:false, artificially:false},
  {atomic:null, symbol:null, name:null, group:null, mass:null, weight:null, radioactive:null, artificially:null},
]

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
