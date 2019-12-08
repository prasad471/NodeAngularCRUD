import { Component, OnInit } from '@angular/core';
import { UserService } from '../add-user/user.service';
import User from './user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  businesses: User[];
  

  constructor(private bs: UserService) { 
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.loadDetails();
    });
  }

  ngOnInit() {
   this.loadDetails();
  }

  loadDetails()
  {
    this.bs
    .getBusinesses()
    .subscribe((data: any) => {
      console.log(data);
      this.businesses = data.data;
  });
  }

}
