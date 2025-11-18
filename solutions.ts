type TFormatValue = string | number | boolean;

const formatValue = (value: TFormatValue): TFormatValue => {
  switch (typeof value) {
    case "string":
      return value.toUpperCase();
    case "number":
      return value * 10;
    case "boolean":
      return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating > 4 && item.rating <= 5);
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;

  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

type TArray = string[] | number[];

const getUniqueValues = (array1: TArray, array2: TArray): TArray => {
  const uniqueArray: TArray = [];

  const uniqueLookUpObj: Record<string, boolean> = {};

  for (let i of array1) {
    if (!uniqueLookUpObj[i]) {
      uniqueLookUpObj[i] = true;
      uniqueArray[uniqueArray.length] = i;
    }
  }

  for (let j of array2) {
    if (!uniqueLookUpObj[j]) {
      uniqueLookUpObj[j] = true;
      uniqueArray[uniqueArray.length] = j;
    }
  }

  return uniqueArray;
};

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Products[]): number => {
  const totalProductsPrice = products.reduce((totalPrice, currentProduct) => {
    const price = currentProduct.price * currentProduct.quantity;

    if (
      currentProduct.discount &&
      currentProduct.discount > 0 &&
      currentProduct.discount <= 100
    ) {
      const discount = price * (currentProduct.discount / 100);
      const priceAfterDiscount = price - discount;
      return priceAfterDiscount + totalPrice;
    }

    return totalPrice + price;
  }, 0);

  return totalProductsPrice;
};
