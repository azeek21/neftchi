export default class ProductSupplierService {
  static async getSuppliersFilterForProduct(): // productId: string
  Promise<Filter> {
    return {
      channel: {
        title: "Канал продаж",
        type: "checkbox",
        selectType: "multi",
        fields: {
          API: { title: "API", available: 69 },
          MP: { title: "Маркет плейс", available: 43 },
          Onl: { title: "Online", available: 99 },
          Ofl: { title: "Offline", available: 123 },
          Bfd: { title: "Backdor", available: 83 },
          Bs: { title: "Bullshit", available: 33 },
          Mdl: { title: "Middleman", available: 31 },
          Xl: { title: "Boo baa", available: 21 },
        },
      },
      analogues: {
        title: "Аналоги",
        type: "checkbox",
        selectType: "multi",
        fields: {
          original: { title: "Оригинал" },
          analogue: { title: "Аналог" },
        },
      },
      countries: {
        title: "Страна | Склад",
        type: "checkbox",
        selectType: "multi",
        fields: {
          usa: { title: "США" },
          rus: { title: "Россия" },
          china: { title: "Китай" },
          jp: { title: "Япония" },
          uzb: { title: "Узбекистан" },
        },
      },
      cities: {
        title: "Город | Склад",
        type: "checkbox",
        selectType: "multi",
        fields: {
          msk: { title: "Москва" },
          lorem: { title: "Lorem" },
          ipsum: { title: "Ipsum" },
          dolor: { title: "Dolor" },
          sit: { title: "Sit" },
          amet: { title: "Amet" },
        },
      },
      currency: {
        title: "Валюта",
        type: "checkbox",
        selectType: "multi",
        fields: {
          rub: { title: "RUB" },
          eur: { title: "EUR" },
          usd: { title: "USD" },
          aed: { title: "AED" },
        },
      },
      availability: {
        title: "Наличие",
        type: "range",
        min: 0,
        minPlaceholder: "От",
        maxPlaceholder: "До",
      },
      price: {
        title: "Цена",
        type: "range",
        min: 100,
        max: 1_050_000_000,
      },
      shipment: {
        title: "Отгрузка",
        type: "range",
        minPlaceholder: "От",
        maxPlaceholder: "До",
      },
      inStock: {
        type: "boolean",
        title: "Товар в наличии",
      },
      cheapest: {
        type: "boolean",
        title: "Самые дешевые позиции",
      },
      fastest: {
        type: "boolean",
        title: "Самые быстрые",
      },
    };
  }
}
