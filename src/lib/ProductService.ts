export default class ProductService {
  static async getAllProducts(): Promise<ProductType[]> {
    const req = await (await fetch("http://localhost:8080/products")).json();
    console.log(req);
    return req;
  }
}
