import './App.css';

const books =[
{
  id:1,
  img: 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg',
  title: "The Psychology of Money",
  author: "Morgan Housel",
  price: 214
},
{
  id:2,
  img:"https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
  title: "Ikigai",
  author: "Hector Garcia",
  price: 257
},
{
  id:3,
  img:"https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
  price: 345
},
{
  id:4,
  img:"https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY218_.jpg",
  title: "You Can",
  author: "George Mathew Adams",
  price: 99
},
{
  id:5,
  img:"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_AA152_.jpg",
  title: "Do It Today",
  author: "Darius Foroux",
  price: 98
},
{
  id:6,
  img:"https://m.media-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  price: 236
},
{
  id:7,
  img:"https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg",
  title: "The Power of your subconcious mind",
  author: "Joseph Murphy",
  price: 99
},
{
  id:8,
  img:"https://m.media-amazon.com/images/I/711cvCcahjL._AC_UY218_.jpg",
  title: "It Ends With Us",
  author: "Colleen Hoover",
  price: 219
},
{
  id:9,
  img:"https://m.media-amazon.com/images/I/814jC+rODgL._AC_UY218_.jpg",
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  price: 203
},
{
  id:10,
  img:"https://m.media-amazon.com/images/I/61ZNAnIrwwL._AC_UY218_.jpg",
  title: "Eat That Frog",
  author: "Brian Tracy",
  price: 175
},
{
  id:11,
  img:"https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 188
},
{
  id:12,
  img:"https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UY218_.jpg",
  title: "Man's Search For Meaning",
  author: "Victor E Frankl",
  price: 165
},
{
  id:13,
  img:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg",
  title: "Attitude is Everything",
  author: "Jeff Keller",
  price: 135
},
{
  id:14,
  img:"https://m.media-amazon.com/images/I/61kRkfsIMUL._AC_UY218_.jpg",
  title: "DO EPIC SHIT",
  author: "Ankur Warikoo",
  price: 219
},
{
  id:15,
  img:"https://m.media-amazon.com/images/I/91xPAUEuzWS._AC_UY218_.jpg",
  title: "India that is Bharat",
  author: "J Sai Deepak",
  price: 440
}
]

const Book =({id,img,title,author,price})=>{
  return (
    <div className="grid-item">
          <img src={img} alt={title} />
          <h1>{`${id}. ${title}`}</h1>
          <span>{author}</span>
          <p>{`₹${price}`}</p>
        </div>
  )  
}

function BookList() {
  return (
    <div className="grid-container">
     {books.map(book=>{
      return (
        <Book {...book} /> //Or book={book} but then we cant destructure the values of book in the formal argument Of Book
    ) })}
    </div>
  );
}

export default BookList;
