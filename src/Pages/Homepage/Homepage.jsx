import Category from "../../Components/Category/Category";
import NewsSection from "../../layouts/NewsSection";
import LoginAside from "../../Components/Login/LoginAside";

export const categoryPromise = fetch("/categories.json").then((res) =>
  res.json()
);

const Homepage = () => {
  return (
    <div className="grid grid-cols-12 gap-12 justify-between">
      <div className="col-span-3">
        <Category></Category>
      </div>
      <main className="col-span-6">
        <NewsSection></NewsSection>
      </main>
      <div className="col-span-3">
        <LoginAside></LoginAside>
      </div>
    </div>
  );
};

export default Homepage;
