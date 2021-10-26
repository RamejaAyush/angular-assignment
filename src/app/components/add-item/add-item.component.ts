import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  ItemService = this.itemService;

  ngOnInit(): void {}
}
