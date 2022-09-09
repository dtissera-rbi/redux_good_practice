import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../views/Home";
import LoginView from "../views/Login";
import ProductsView from "../views/Products";
import NavigationView from "../views/Navigation";

function Router() {
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {auth.logged ? (
          <>
            <Route path="/products" element={<ProductsView />} />
            <Route path="/navigation" element={<NavigationView />} />
            <Route path="/" element={<HomeView />} />
          </>
        ) : (
          <Route path="/" element={<LoginView />} />
        )}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
