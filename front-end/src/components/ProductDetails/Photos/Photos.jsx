import styles from "./Photos.module.css";
import { FlexContainer } from "../../Common/FlexContainer/FlexContainer";
import { useState } from "react";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              src={photo}
              key={photo}
              alt=""
              className={currentPhoto === photo ? styles.active : ""}
              onClick={() => {
                setCurrentPhoto(photo);
              }}
            />
          );
        })}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} alt="" />
    </FlexContainer>
  );
}
