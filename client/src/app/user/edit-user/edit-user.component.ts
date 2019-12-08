import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../add-user/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  business: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: UserService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ]
      });
    }

    updateBusiness(person_name, business_name, business_gst_number) {
      console.log('here')
      this.route.params.subscribe(params => {
         this.bs.updateBusiness(person_name, business_name, business_gst_number, params['id']);
         this.router.navigate(['users']);
   });
  }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.bs.editBusiness(params['id']).subscribe((res: any) => {
            this.business = res.data;
        });
      });
    }

}
