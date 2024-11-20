
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const products = [
    {
      id: 1,
      title: "Air Force",
      price: '$'+119,
      colors: [
        {
          code: "black",
          img: "img/air.png",
        },
        {
          code: "darkblue",
          img: "img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: '$'+149,
      colors: [
        {
          code: "lightgray",
          img: "img/jordan.png",
        },
        {
          code: "green",
          img: "img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: '$'+119,
      colors: [
        {
          code: "lightgray",
          img: "img/blazer.png",
        },
        {
          code: "green",
          img: "img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: '$'+149,
      colors: [
        {
          code: "black",
          img: "img/crater.png",
        },
        {
          code: "lightgray",
          img: "img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: '$'+119,
      colors: [
        {
          code: "gray",
          img: "img/hippie.png",
        },
        {
          code: "black",
          img: "img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');



// function for the slides 
menuItems.forEach((item,index)=> {
    item.addEventListener('click', () =>{
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`; 

        // change  the choosen product
        choosenProduct = products[index];

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title;

        // change price of current product
        currentProductPrice.textContent = choosenProduct.price;

        // change  img of the current product
        currentProductImg.src = choosenProduct.colors[0].img;
        
        // change the colors according to the choosen product
        currentProductColors.forEach((color, index) =>{
            color.style.background = choosenProduct.colors[index].code;
        });
    }); 
});

 // function to change img product by clicking on color
 currentProductColors.forEach((color, index) =>{
  color.addEventListener('click', ()=> {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
 });

 // function to choose the size 
 currentProductSizes.forEach((size, index) => {

  size.addEventListener('click', ()=>{       // i should choose just one size
    currentProductSizes.forEach((size) =>{
      size.style.backgroundColor = 'white';
      size.style.color = 'black';  
    })

    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
 });

 const productButton = document.querySelector('.productButton');
 const payment = document.querySelector('.payment');
 const close = document.querySelector('.close');

 // function for open payment 
 productButton.addEventListener('click', ()=>{
  payment.style.display = 'flex';
 });

 // function for close payment
 close.addEventListener('click', ()=>{
  payment.style.display = 'none';
 })
  
 // function after fill the  form
 let payButton = document.querySelector('.payButton');
 payButton.addEventListener('click' , ()=>{
  payment.style.display = 'none';
 });





