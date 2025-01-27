import Navigation from "@/components/Navigation";

const TestComponent = () => {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Card Title
          </h2>
          <p className="text-gray-600 text-base">
            This is a description of the card. The card adjusts its size
            responsively according to the screen size, and the text looks great
            on mobile and desktop devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
