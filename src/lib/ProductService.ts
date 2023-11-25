import data from "../../jsonserver/db.json";

export default class ProductService {
  static async getAllProducts(): Promise<ProductType[]> {
    // const req = await (await fetch("http://localhost:8080/products")).json();
    const req = data.products as ProductType[];
    return req;
  }

  static async getProductSuppliers(id: string): Promise<ProductSupplier[]> {
    // const req = await (
    //   await fetch("http://localhost:8080/products?id=" + id)
    // ).json();
    const one = data.products.find(
      (product) => product.id === id
    ) as ProductType;
    return one?.suppliers || [];
  }
}
