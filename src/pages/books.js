import React from "react";
import Link from "gatsby-link";
import styles from "./books-css-modules.module.css";

const SecondPage = ({ data }) => {
  let user = data.dataJson.data.user;
  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          borderBottom: "2px solid black",
          textAlign: "center"
        }}
      >
        <strong>Books History</strong>
      </div>
      <div className={styles.userShelvesContainer}>
        <div className={styles.userShelvesContainer__child}>
          <div>{user.userShelves.currentlyReading}</div>
          <div>Curently Reading</div>
        </div>
        <div className={styles.userShelvesContainer__child}>
          <div>{user.userShelves.read}</div>
          <div>Read</div>
        </div>
        <div className={styles.userShelvesContainer__child}>
          <div>{user.userShelves.toRead}</div>
          <div>To Read</div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

export const query = graphql`
  query MyDataQuery {
    dataJson {
      data {
        user {
          name
          lastActive
          friendsNo
          reviewsCount
          userShelves {
            read
            currentlyReading
            toRead
          }
          userStatus {
            percentRead
          }
          currentReading {
            book {
              title
              numOfPages
              authors
              link
              publicationYear
              averageRating
              ratingCount
            }
          }
        }
      }
    }
  }
`;
