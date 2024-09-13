import Navbar from "./Navbar";

function MarketPlace() {
  const books = [
    {
      name: "Atomic Habits",
      price: 16.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/91sA8CNCTLL._AC_UL320_.jpg",
    },
    {
      name: "The Alchemist",
      price: 14.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL320_.jpg",
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      price: 18.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UL320_.jpg",
    },
    {
      name: "Educated: A Memoir",
      price: 12.49,
      imageUrl:
        "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UL320_.jpg",
    },
    {
      name: "Becoming",
      price: 11.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UL320_.jpg",
    },
    {
      name: "The Power of Now",
      price: 13.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/61xFT-Nt3CL._AC_UL320_.jpg",
    },
    {
      name: "Rich Dad Poor Dad",
      price: 10.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL320_.jpg",
    },
    {
      name: "Where the Crawdads Sing",
      price: 9.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_UL320_.jpg",
    },
    {
      name: "Thinking, Fast and Slow",
      price: 15.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/41JrJrCVMLL._AC_UL320_.jpg",
    },
    {
      name: "The Four Agreements",
      price: 7.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/71OCgJoERuL._AC_UL320_.jpg",
    },
    {
      name: "The Subtle Art of Not Giving a F*ck",
      price: 14.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UL320_.jpg",
    },
    {
      name: "Dare to Lead",
      price: 16.49,
      imageUrl:
        "https://m.media-amazon.com/images/I/71-j2ZWcXYL._AC_UL320_.jpg",
    },
    {
      name: "Can't Hurt Me",
      price: 19.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81Yi4DSbSfL._AC_UL320_.jpg",
    },
    {
      name: "The 7 Habits of Highly Effective People",
      price: 11.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/91UWp7ty4-L._AC_UL320_.jpg",
    },
    {
      name: "The Book Thief",
      price: 12.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/71a-f3pC92L._AC_UL320_.jpg",
    },
    {
      name: "Grit: The Power of Passion and Perseverance",
      price: 13.49,
      imageUrl:
        "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UL320_.jpg",
    },
    {
      name: "Outliers: The Story of Success",
      price: 15.49,
      imageUrl:
        "https://m.media-amazon.com/images/I/81Rc+Me1TxL._AC_UL320_.jpg",
    },
    {
      name: "The Midnight Library",
      price: 13.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UL320_.jpg",
    },
    {
      name: "How to Win Friends & Influence People",
      price: 10.49,
      imageUrl:
        "https://m.media-amazon.com/images/I/81TaoXZX+VL._AC_UL320_.jpg",
    },
    {
      name: "The Catcher in the Rye",
      price: 9.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UL320_.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {books.map((book, index) => (
          <div
            key={index}
            className="max-w-sm rounded-md shadow-md  overflow-hidden shadow-gray-700 bg-orange-500"
          >
            <img
              className="w-full h-64 object-cover p-2"
              src={book.imageUrl}
              alt={book.name}
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{book.make}</div>
              <p className="text-gray-700 font-semibold text-base">
                author: {book.model}
              </p>
              <p className="text-gray-700 text-base">Price: ${book.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;
