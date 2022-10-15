import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
<<<<<<< HEAD
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
=======
import { useMutation } from "@apollo/react-hooks";
import { getCurrentUser } from "../utils/getCurrentUser";
import { REMOVE_BOOK } from "../utils/mutations";

>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

const SavedBooks = () => {
<<<<<<< HEAD
  const [setUserData] = useState({});
  const { data } = useQuery(QUERY_ME);
  const userData = data.me || {};
  const [removeBook] = useMutation(REMOVE_BOOK);

  // use this to determine if `useEffect()` hook needs to run afsgain
=======
  // const { data } = useQuery(getCurrentUser);
  const { removeBook } = useMutation(REMOVE_BOOK);
  const [userData, setUserData] = useState({});

  console.log(userData);
  // use this to determine if `useEffect()` hook needs to run again
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

<<<<<<< HEAD
        const response = await data(token);
=======
        const response = await getCurrentUser(token);
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
<<<<<<< HEAD
  }, [userDataLength, data, setUserData]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
=======
  }, [userDataLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleremoveBook = async (bookId) => {
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeBook(bookId, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
<<<<<<< HEAD
                    onClick={() => handleDeleteBook(book.bookId)}
=======
                    onClick={() => handleremoveBook(book.bookId)}
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
