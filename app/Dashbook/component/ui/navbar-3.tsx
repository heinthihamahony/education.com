import { Button } from "@nextui-org/react";
import BasketIcon from "./basket";
import { ChangeLanguage } from "./change-language";
import { SearchDemo } from "./search";
import { SelectDemo } from "./select";
import { Link } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

export default function Navbar3() {
  return (
    <>
      {/* <div className=" bg-[#9FB4FF] text-center font-semibold py-2">
        🎉 Promotional Banner 🎉
      </div> */}
      <div className=" flex items-center mx-20 gap-4 my-4">
        <Link href="/Home" className=" flex items-center gap-2">
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(159,180,255,1)"
          >
            <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V10.6973L17.0215 20.2076C17.1363 20.7479 17.6673 21.0927 18.2075 20.9779L21.142 20.3541C21.6822 20.2393 22.027 19.7083 21.9122 19.1681L19.0015 5.47402C18.8866 4.9338 18.3556 4.58896 17.8154 4.70378L15 5.30221V5C15 4.44772 14.5523 4 14 4H9C9 3.44772 8.55228 3 8 3H4ZM9 6H13V14H9V6ZM13 16V19H9V16H13ZM7 17V19H5V17H7ZM18.7699 18.8137L18.3541 16.8577L19.3323 16.6498L19.748 18.6058L18.7699 18.8137Z"></path>
          </svg>
          <p className="text-xl font-semibold">StudyLynx</p>
        </Link>
        <SelectDemo />
        <SearchDemo />

        <p className="text-sm w-[230px]">For teachers</p>

        <BasketIcon />
        <ChangeLanguage />
        <div className=" flex gap-3 border-l border-l-gray-300 pl-3">
          <Link href="#">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(165,170,183,1)"
            >
              <path d="M20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(165,170,183,1)"
            >
              <path d="M2.13127 13.6308C1.9492 12.5349 1.95521 11.434 2.13216 10.3695C3.23337 10.3963 4.22374 9.86798 4.60865 8.93871C4.99357 8.00944 4.66685 6.93557 3.86926 6.17581C4.49685 5.29798 5.27105 4.51528 6.17471 3.86911C6.9345 4.66716 8.0087 4.99416 8.93822 4.60914C9.86774 4.22412 10.3961 3.23332 10.369 2.13176C11.4649 1.94969 12.5658 1.9557 13.6303 2.13265C13.6036 3.23385 14.1319 4.22422 15.0612 4.60914C15.9904 4.99406 17.0643 4.66733 17.8241 3.86975C18.7019 4.49734 19.4846 5.27153 20.1308 6.1752C19.3327 6.93499 19.0057 8.00919 19.3907 8.93871C19.7757 9.86823 20.7665 10.3966 21.8681 10.3695C22.0502 11.4654 22.0442 12.5663 21.8672 13.6308C20.766 13.6041 19.7756 14.1324 19.3907 15.0616C19.0058 15.9909 19.3325 17.0648 20.1301 17.8245C19.5025 18.7024 18.7283 19.4851 17.8247 20.1312C17.0649 19.3332 15.9907 19.0062 15.0612 19.3912C14.1316 19.7762 13.6033 20.767 13.6303 21.8686C12.5344 22.0507 11.4335 22.0447 10.3691 21.8677C10.3958 20.7665 9.86749 19.7761 8.93822 19.3912C8.00895 19.0063 6.93508 19.333 6.17532 20.1306C5.29749 19.503 4.51479 18.7288 3.86862 17.8252C4.66667 17.0654 4.99367 15.9912 4.60865 15.0616C4.22363 14.1321 3.23284 13.6038 2.13127 13.6308ZM11.9997 15.0002C13.6565 15.0002 14.9997 13.657 14.9997 12.0002C14.9997 10.3433 13.6565 9.00018 11.9997 9.00018C10.3428 9.00018 8.99969 10.3433 8.99969 12.0002C8.99969 13.657 10.3428 15.0002 11.9997 15.0002Z"></path>
            </svg>
          </Link>
          <Avatar
            isBordered
            src="https://lh3.google.com/u/0/d/1f-dXKk4CRjO3saEtK2qJPoX9Fj-btZPs=w2378-h1626-iv1"
          />
        </div>
      </div>
      <div className="bg-[#6678BA] font-semibold  flex items-center gap-5 px-20 py-4">
        <Link href="/Home" className=" hover:underline text-white text-lg">
          Home
        </Link>
        <Link href="/Dashbook" className=" hover:underline text-white text-lg">
          DashBook1
        </Link>
        <Link href="/Dashbook2" className=" hover:underline text-white text-lg">
          DashBook2
        </Link>
      </div>
    </>
  );
}
