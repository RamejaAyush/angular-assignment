import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  editable: boolean = true;
  displayMessage: boolean;

  constructor(private itemService: ItemService, private router: Router) {}

  ItemService = this.itemService;

  ngOnInit(): void {
    if (this.itemService.Items.length == 0) {
      this.displayMessage = true;
    } else {
      this.displayMessage = false;
    }
  }

  changeEditState() {
    this.editable = !this.editable;
  }
  goToAddItem() {
    this.router.navigate(['add-item']);
  }
}
