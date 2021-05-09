import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lq-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
