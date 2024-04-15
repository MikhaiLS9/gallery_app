import styles from "./Painting.module.css";
import { PREFIX } from "../../helpers/API";
import { IGetPaintings } from "./Painting.props";

function Painting({ paintings }: IGetPaintings): JSX.Element {
  return (
    <section className={styles.wrapper}>
      {paintings.map((el) => (
        <div key={el.id} className={styles.painting}>
          <img
            className={styles.painting_svg}
            src={`${PREFIX}${el.imageUrl}`}
            alt={el.name}
          />
          <div className={styles.painting_info}>
            <h3>{el.name}</h3>

            <div>
              <p>
                Author: <span>{el.authorId}</span>
              </p>
              <p>
                Created: <span>{el.created}</span>
              </p>
              <p>
                Location: <span>{el.locationId}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Painting;
