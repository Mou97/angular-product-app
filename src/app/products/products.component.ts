import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];

  constructor() {}

  ngOnInit(): void {}

  onClickSubmit(formData): void {
    let newPorduct: Product = new Product(
      formData.name,
      parseFloat(formData.price)
    );
    this.products.push(newPorduct);
    console.log(this.products);
  }
}
