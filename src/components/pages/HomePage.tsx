import Banner from "../Banner";
import CardList from "../CardList";
import SEO from "../SEO";

const HomePage = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Manage, track, and split expenses easily with Expense Splitter."
      />
      <Banner />
      <CardList />
    </div>
  );
};

export default HomePage;
