import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];

  newProduct: Product;

  constructor() {}

  ngOnInit(): void {}

  onClickSubmit(formData): void {
    console.log(formData);
  }
}
