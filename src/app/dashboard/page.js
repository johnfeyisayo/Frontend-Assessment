import SideNavBar from "../components/SideNavBar/SideNavBar";

export default function Dashboard() {
    return (
      <main className="h-screen flex flex-row justify-start">
        <SideNavBar />
        <section className="flex-1 p-4">
        <h1 className="">Hello Dashboard</h1>
        </section>
      </main>
    );
  }