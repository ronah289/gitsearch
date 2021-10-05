import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {


  whatToSearch!:string
  @Output() sendValue = new EventEmitter<any>();

  searchFor() {
    this.sendValue.emit(this.whatToSearch)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
