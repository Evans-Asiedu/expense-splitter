import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Card
        imageUrl="https://cdn.usegalileo.ai/sdxl10/3a4bc566-a2f9-40bb-b275-3a348f14e5f6.png"
        title="Family"
        description="share gifts, and coupons"
      />
    </>
  );
}

export default App;
