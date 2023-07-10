import Article from "./Article";
import Filters from "./Filters";
import SideBar from "./SideBar";

export default function Main() {
  return (
    <main className="flex flex-col h-full mt-16">
      <Filters />
      <div className="flex h-full">
        <SideBar />
        <Article />
      </div>
    </main>
  );
}
