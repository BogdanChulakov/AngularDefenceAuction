import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { DeleteModel } from '../models/delete.model';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  itemId: string;
  model: DeleteModel;
  constructor(
    
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router) {
    this.model = new DeleteModel('','', '', '', 0)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params.id;
    })
    this.itemService.getDetails(this.itemId).subscribe({
      next: (item: DeleteModel) => {
        this.model = item;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  deleteItem(){
    this.itemService.delete(this.itemId).subscribe({
      next: (msg) => {
        this.router.navigate(['/item/myItems']);
      },
      error: (err) => {
        console.error(err);
      }
    }

    )
  }

}
