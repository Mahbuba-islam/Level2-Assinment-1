

type FormateFuncType = number | string | boolean |undefined

const formatValue = (value : FormateFuncType ) : FormateFuncType => {
  if(typeof value === 'string'){
     return  value.toUpperCase();
  }
  else if(typeof value === 'number'){
    return value*10
  }
  else if(typeof value === 'boolean'){
    return !value
  }
  else{
    return undefined
  }
};





const getLength  = (value : string | number[]) :  number | undefined => {
   if(typeof value === 'string'){
     return value.length
   }
     
   else if(Array.isArray(value)){
    return value.length
   }
  else{
    return undefined
  }
};




  class Person  {
     name : string;
     age: number ;

     constructor (name:string, age:number){
        this.name = name;
        this.age = age
     }

     getDetails() : string{
        return `'Name: ${this.name}, Age: ${this.age}'`
     }
  }


  


type Books = { title: string, rating: number}

const books : Books[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


const filterByRating = (books: Books[]) : Books[] => {
  const result = books.filter(book => {
    const rating = Number(book.rating.toFixed(1));
    return rating >= 4;
  });

  return result;
};

   
   
    
type Users =  { id: number; name: string; email: string; isActive: boolean }

const users : Users[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


const filterActiveUsers = (users: Users[] ) : Users[] => {
  const result = users.filter(user => user.isActive === true)
  return result
}







interface Book {
   title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (myBook:Book) : void => {
 const {title, author, publishedYear, isAvailable} = myBook
 const availability =   isAvailable ? 'Yes' : 'No'
console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`) 
 
}





type UniqueArrayType = Array<number|string>

const getUniqueValues  = (arr1 : UniqueArrayType , arr2 : UniqueArrayType) : UniqueArrayType => {
   let combined : UniqueArrayType = []
   const isExists = (value : number | string) : boolean => {
      const numberValue = typeof value === 'string' ? Number(value) : value
      for(let i = 0; i < combined.length; i++){
        if(combined[i] === numberValue){
         return true;
        }
       }
       return false
    }


    for(let i = 0; i<arr1.length ; i++){
      const arr1Number = typeof arr1[i] === 'string' ? Number(arr1[i]) : arr1[i]
     if(!isExists(arr1Number)){
        combined[combined.length] = arr1Number
      }
     }

     
    for(let i = 0; i<arr2.length ; i++){
      const arr2Number = typeof arr2[i] === 'string' ? Number(arr2[i]) : arr2[i]
      if(!isExists(arr2Number)){
        combined[combined.length] = arr2Number
      }
 
    }
 
    return combined
   
  } ;






  type Product =  { name: string, price: number, quantity: number, discount?: number }
  
  const products : Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
  ];

 const calculateTotalPrice = (products:Product[]) : number => {
  return products.reduce((current:number, product:Product,) => {
   const {price, quantity, discount} = product
   const discountedPrice = discount ? price - (price*discount)/100 : price
    const totalPrice = discountedPrice * quantity;
    return current + totalPrice;

   }, 0)

  
};



