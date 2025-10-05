import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";

const menus = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "Images",
    to: "/images",
  },
  {
    label: "Login",
    to: "/login",
  },
];

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  return (
    <div>
      <div className="bg-slate-900 flex justify-around items-center">
        <h1 className="text-white text-2xl font-bold">Redux</h1>
        <ul className="flex">
          {menus.map((item, index) => {
            if (auth.user && item.to === "/login") return null;

            return (
              <li key={index} className="p-6 hover:bg-indigo-600">
                <Link className="text-white capitalize" to={item.to}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {auth.user && (
          <div className="relative">
            <button className="w-10 h-10 bg-orange-600 rounded-full overflow-hidden">
              <img
                src={auth.user.image}
                className="w-full h-full"
                alt={auth.user.firstName}
              />
            </button>
            <div className="bg-white shadow-lg flex flex-col absolute top-16 right-0">
              <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">
                My Profile
              </button>
              <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">
                {auth.user.email}
              </button>
              <button
                onClick={() => dispatch(logout())}
                className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      <div>{children}</div>

      <div className="bg-slate-900 p-32">
        <h1 className="text-6xl text-white">Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
