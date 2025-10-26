import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const {state} = useNavigation()
  return (
    <div className="w-11/12 mx-auto my-6">
      <header>
        <Header></Header>
        {import.meta.env.VITE_name}
        <section>
            <LatestNews></LatestNews>
        </section>
        <nav className="mx-auto my-3">
            <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-4.5 mt-7">
        <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state=="loading" ? <Loading> </Loading> : <Outlet></Outlet>}  
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
