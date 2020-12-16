import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/item/models/item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  model: ItemModel;
  errorMessage:string;

  constructor(private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.model = new ItemModel('', '', '', 0 ,'');
  }

  ngOnInit(): void {

  }
  create() {
    this.itemService.create(this.model).subscribe({
      next: (item) => {
        this.router.navigate([`/item/details/${item._id}`]);
      },
      error: (err) => {
       this.errorMessage=err.error;
      }
    })
  }

}
