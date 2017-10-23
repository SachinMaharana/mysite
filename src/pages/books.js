import React from "react";
import Link from "gatsby-link";

const SecondPage = ({ data }) => {
  let user = data.dataJson.data.user;
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{ borderBottom: "2px solid black" }}>
        <strong>Books History</strong>
      </p>
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
