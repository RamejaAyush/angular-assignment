import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITEM } from './interfaceItem';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  ngOnInit(): void {}

  localItem: string;
  Items: ITEM[];

  constructor(private router: Router, private toaster: ToastrService) {
    this.localItem = localStorage.getItem('items');
    if (this.localItem == null) {
      this.Items = [];
    } else {
      this.Items = JSON.parse(this.localItem);
    }
  }

  addItem(enteredName, enteredDesc, enteredPrice) {
    if (
      enteredName.value == '' ||
      enteredDesc.value == '' ||
      enteredPrice.value == 0
    ) {
      this.toaster.error('Enter Valid Values');
      return;
    } else {
      let item: ITEM = {
        id: this.Items.length + 1,
        name: enteredName.value,
        desc: enteredDesc.value,
        price: enteredPrice.value,
      };
      this.Items.push(item);
      localStorage.setItem('items', JSON.stringify(this.Items));
      this.toaster.success('changes are saved in localstorage');
      enteredName.value = '';
      enteredDesc.value = '';
      enteredPrice.value = 0;
      this.router.navigate(['dashboard']);
      this.toaster.success('task is created');
    }
  }

  deleteItem(item: ITEM) {
    const index = this.Items.indexOf(item);
    this.Items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.Items));
    this.toaster.success('Item removed');
  }
}
