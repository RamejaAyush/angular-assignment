import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  editable: boolean = false;

  constructor(private itemService: ItemService) {}

  ItemService = this.itemService;

  ngOnInit(): void {
    console.log(this.itemService.Items);
  }

  changeEditState() {
    this.editable = !this.editable;
  }
}
