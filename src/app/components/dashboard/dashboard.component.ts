import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  editable: boolean = false;
  itemData: any;

  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {
    this.authService.getProducts().subscribe(
      (res) => {
        this.itemData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  changeEditState() {
    this.editable = !this.editable;
  }
}
