import Cards from "../components/Cards/Cards";
import SideNavBar from "../components/SideNavBar/SideNavBar";

export default function Dashboard() {
    return (
      <main className="h-screen flex flex-row justify-start">
        <SideNavBar />
        <section className="flex-1 p-4">
        <div className="my-8 md:">
        <h1 className="font-bold">Welcome Olivia</h1>
        <p className="text-xs">Manage your team members And their account permissons here</p>
        <p className="text-xs"></p>
        <hr className="" />
        </div>
        <div>
        <Cards />
        </div>

        </section>
      </main>
    );
  }