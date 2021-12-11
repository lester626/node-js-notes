export class Product {
  name?: string;
  category?: string;
  isAvailable?: boolean;


  constructor(name?: string, category?: string, isAvailable?: boolean) {
    this.name = name;
    this.category = category;
    this.isAvailable = isAvailable;
  }
}
