import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users : Array<any>;
  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.userDetailsService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
