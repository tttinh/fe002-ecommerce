import {
  Armchair,
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';

const Header = () => {
  return (
    <>
      {/* top section */}
      <div className="bg-secondary text-secondary-content">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-sm">
            <Check />
            <span>Free On All Orders Over $50</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="flex items-center gap-1 px-2">
              Eng
            </a>
            <a href="#" className="flex items-center gap-1 px-2">
              Faqs
            </a>
            <a href="#" className="flex items-center gap-1 px-2">
              <Info />
              <span>Need Help</span>
            </a>
          </div>
        </div>
      </div>

      {/* middle section */}
      <div className="bg-base-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Armchair className="text-primary" size={32} />
            <span className="text-3xl">Comforty</span>
          </div>
          <div>
            <label className="input input-primary input-lg w-128">
              <input type="search" className="grow" placeholder="Search" />
              <Search />
            </label>
          </div>
          <div className="flex gap-4">
            <div className="btn">
              <ShoppingCart />
              <span className="bg-primary text-primary-content mx-1 ml-2 rounded-md px-1">
                99
              </span>
            </div>
            <div className="btn">
              <Heart />
            </div>
            <div className="btn">
              <User />
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="border-b-1 border-gray-300">
        <div className="container flex items-center justify-between py-4 text-sm font-light">
          <div className="flex items-center gap-8">
            {/* All categories dropdown menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <Menu /> All Categories
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Chair 1</a>
                </li>
                <li>
                  <a>Chair 2</a>
                </li>
                <li>
                  <a>Chair 3</a>
                </li>
                <li>
                  <a>Chair 4</a>
                </li>
              </ul>
            </div>

            {/* Navigation links */}
            <ul className="flex gap-8">
              <li className="text-primary">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          {/* Mobile contact */}
          <div>
            <span className="text-gray-400">Contact: </span>(64)123-456-7890
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
