import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/Header/MainScreen";

const notes = [
  {
    _id: "1",
    title: "Day 1 of college",
    content:
      "I made a few new friends and introduced myself to a lot of new teachers.",
    category: "College",
  },
  {
    _id: "2",
    title: "Learned some Node JS",
    content: "Learned how to create a server in node JS and my first API",
    category: "Learning",
  },
  {
    _id: "3",
    title: "Watched some Anime",
    content: "Finished 2 seasons of Attack on Titan and My Hero academia.",
    category: "Entertainment",
  },
  {
    _id: 4,
    title: "Started React JS",
    content:
      "Made my first App in React JS, feels awesome to learn something new. I aim to be a full stack dev someday",
    category: "Learning",
  },
];

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title="Welcome Back Emmanuel ..">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginButtom: 6 }}>create note</Button>
      </Link>

      {notes.map((note) => (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    flex: 1,
                    color: "black",
                    textDecoration: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Header>{" "}
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>

                  <Button
                    onClick={() => deleteHandler(note._id)}
                    variant="danger"
                    className="mx-2"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Accordion.Body eventKey="0">
                <Card.Body>
                  <h4 style={{ color: "white" }}>
                    <Badge bg="success">category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p> {note.content} </p>
                    <footer className="blockquote-footer">
                      created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
