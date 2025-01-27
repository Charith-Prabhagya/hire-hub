import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          Choose a tab from the navigation to explore.
        </p>
      </div>
    </div>
  );
}
