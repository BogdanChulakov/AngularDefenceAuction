import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/item/models/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  id: string;
  model: ItemModel;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) {
    this.model = new ItemModel('', '', '', 0,'')
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.itemService.getDetails(this.id).subscribe({
      next: (item: ItemModel) => {
        this.model = item;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  editItem() { 
    this.itemService.edit(this.model, this.id).subscribe({
      next: (item) => {
        this.router.navigate([`/item/details/${this.id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
