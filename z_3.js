"use strict";

//Задание №1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно.

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
        i++;
    }
    if (i % 2 == 0) {
        console.log(i + " - четное число");
    } else {
        console.log(i + " - нечетное число");
    }
}

//Задание №2. Выведите в консоль значения, указанные рядом с комментариями:

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    commments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

//Вывод требуемый значений.
console.log(post.author);
console.log(post.commments[0].rating.dislikes);
console.log(post.commments[1].userId);
console.log(post.commments[1].text);

//Задание №3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 50%

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let productsSale = products.map(item => item.price - item.price * 0.5);
console.log(productsSale);


//let productsSale = products.map(function (item) {
//   return item.price - item.price * 0.5;
//});
//console.log(productsSale); 


//Задание №4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно: 
//1. Получить все товары, у которых есть фотографии, можете использоватьметод filter 
//2. Отсортируйте товары по цене, можете использовать метод sort

const products2 = [{
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg", ]
}, {
    id: 5,
    price: 499,
}, {
    id: 10,
    price: 26,
    photos: ["3.jpg"]
}, {
    id: 8,
    price: 78,
}, ];

//Вариант фильтра №1.
let productsPhoto = products2.filter(picture => "photos" in picture && picture.photos.length > 0);
console.log(productsPhoto);

//Вариант фильтра №2 (тоже работает).
//let productPhoto = products2.filter(photo => photo.photos);
//console.log(productPhoto);

//Сортировка массива по цене
products2.sort(function (cost1, cost2) {
    if (cost1.price > cost2.price) {
        return 1;
    }
    if (cost1.price < cost2.price) {
        return -1;
    }
});
console.log(products2);


//Задание №5. Нарисовать горку с помощью console.log (используя цикл for).

let row = "x";

for (let z = 0; z < 20; z++) {
    console.log(row); //Вывод текущего значения строки
    row = row + "x"; //Добавление "х" в строку
}