import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/sharedComponents/MainScreen/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Emmanuel ..">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginButtom: 6 }}>create note</Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventkey="1">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex", borderStyle: "none" }}>
                <Accordion.Header
                  style={{
                    outline: "0 !important",
                    boxShadow: " 0 0 0 0 rgba(0, 0, 0, 0) !important",
                    flex: 1,
                    color: "black",
                    textDecoration: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                    borderStyle: "none",
                  }}
                  as={Card.Text}
                  variant="link"
                  eventkey="0"
                >
                  {note.title}
                </Accordion.Header>{" "}
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

              <Accordion.Body eventkey="0">
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
