import Article from "./Article";
import Filters from "./Filters";
import SideBar from "./SideBar";

export default function Main() {
  return (
    <main className="flex w-full h-full mt-16">
      <div className="h-full w-1/4">
        <SideBar />
      </div>
      <div className="flex flex-col w-4/5 bg-amber-400">
        <Filters />
        <Article />
      </div>
    </main>
  );
}
