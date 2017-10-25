import React from "react";
import Link from "gatsby-link";
import "semantic-ui-css/semantic.min.css";
import styles from "./books-css-modules.module.css";
import { Label, Menu, Tab } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import image from "./images/white-image.jpg";

const src = image;
// image = "/assets/images/avatar/large/elliot.jpg";
// header = "Elliot Baker";
// meta = "Friend";
// description =
//   "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.";
{
  /* <Image src='/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */
}

const CardExampleColored = ({ reading }) => {
  return (
    <Card.Group className={styles.cardGroup}>
      {reading.map(book => {
        let x = /\d+[m]/g;
        function replacer(match, p1, p2) {
          let x = match.replace(/m/g, "l");
          return x;
        }

        // let imageUrl = book.book.imageUrl.replace(x, replacer);
        let imageUrl = book.book.imageUrl;
        // if (imageUrl.includes("nophoto") && book.book.title === "Earthcore") {
        //   imageUrl =
        //     "https://images.gr-assets.com/books/1173555424l/303110.jpg";
        // }
        // if (
        //   imageUrl.includes("nophoto") &&
        //   book.book.title === "Norwegian Wood"
        // ) {
        //   imageUrl = "https://images.gr-assets.com/books/1386924361l/11297.jpg";
        // }
        // if (imageUrl.includes("nophoto")) {
        //   imageUrl = src;
        // }
        const extra = (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a>
              <Icon name="star" color="yellow" />
              {book.book.averageRating}
            </a>
            <a
              href={book.book.link}
              style={{ color: "#1e70bf" }}
              target="_blank"
            >
              Goodreads
            </a>
          </div>
        );
        let path = require(imageUrl);
        return (
          <Card key={book.book.id}>
            <Image src={path} shape="circular" height="400rem" />
            <Card.Content>
              <Card.Header>{book.book.title}</Card.Header>
              <Card.Meta>{book.book.authors}</Card.Meta>
            </Card.Content>
            <Card.Content extra>{extra}</Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

const TabExampleCustomMenuItem = ({ props, reading, read, toRead }) => {
  const panes = [
    {
      menuItem: (
        <Menu.Item key="cr" style={{ fontSize: "1.5em" }}>
          Reading<Label>{props.currentlyReading}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <CardExampleColored reading={reading} />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key="r" style={{ fontSize: "1.5em" }}>
          Read<Label>{props.read}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <CardExampleColored reading={read} />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key="toRead" style={{ fontSize: "1.5em" }}>
          To Read<Label>{props.toRead}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <CardExampleColored reading={toRead} />
        </Tab.Pane>
      )
    }
  ];
  return (
    <Tab
      panes={panes}
      className={styles.tabby}
      menu={{ secondary: true, pointing: true }}
    />
  );
};

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
          textAlign: "center",
          marginBottom: "2rem"
        }}
      >
        <strong>Books History</strong>
      </div>
      {/* <div className={styles.userShelvesContainer}>
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
      </div> */}
      <TabExampleCustomMenuItem
        props={user.userShelves}
        reading={user.currentReading}
        read={user.read}
        toRead={user.toRead}
      />
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
              id
              imageUrl
              title
              numOfPages
              authors
              link
              publicationYear
              averageRating
              ratingCount
            }
          }
          read {
            book {
              id
              imageUrl
              title
              numOfPages
              authors
              link
              publicationYear
              averageRating
              ratingCount
            }
          }
          toRead {
            book {
              id
              imageUrl
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
