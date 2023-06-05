import { useEffect } from "react";
import Classes from "../MarketPlace/Classes/Classes.jsx";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import css from "./index.module.scss";
import db from "../RealEstates/fakedb/db.json";
import CardPreview from "./CardPreview";
import Footer from "./Footer/Footer.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  return (
    <>
      {!isLoading ? (
        <div className={css.container}>
          <Classes />
          <div className={css.filtersContainer}>
            <h2>Dubai</h2>
            <div className={css.filters}>
              <div className={css.filtersSelect}>
                <select>
                  <option hidden value="">
                    Status
                  </option>
                  <option className={css.option}>Buy now</option>
                  <option>Not for sale</option>
                </select>
              </div>
              <ModalFilter />
            </div>
          </div>

          <section>
            {db.length
              ? db.map((land) => (
                  <CardPreview
                    image={land.image}
                    key={land.number}
                    number={land.number}
                    price={land.price}
                    review={land.review}
                    totalReviews={land.totalreviews}
                    amenities={land.amenities}
                    rooms={land.rooms}
                    guests={land.guests}
                    type={land.type}
                  />
                ))
              : null}
          </section>
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default index;
