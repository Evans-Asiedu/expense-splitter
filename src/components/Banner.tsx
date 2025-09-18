import Button from "./Button";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-5/6 h-80 mx-auto border rounded-lg sm:h-100 md:h-140 overflow-hidden">
        <img
          src="https://cdn.usegalileo.ai/stability/3f1a21c9-87d8-48e5-be96-2510253f261f.png"
          alt=""
          className="w-full h-full"
        />

        <div className="absolute left-1/12 top-1/3 md:top-1/2">
          <h2 className="text-secondary-txt font-bold text-2xl sm:text-4xl md:text-6xl">
            Share and track group expenses
          </h2>
          <p className="my-2 sm:my-3 text-secondary-txt text-sm sm:text-xl md:text-md">
            Splitit helps you share expenses with friends, roommates and family.
            Keep track of who owes you what
          </p>
          <Button
            name="Get Started"
            isPrimary={true}
            type="button"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
