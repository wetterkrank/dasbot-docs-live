import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";

const toObject = (input) =>
  Object.assign(...input.map((elem) => ({ [elem._id]: elem.count })));

const app = new Realm.App({ id: "dashboard-ddmhi" });

const App = () => {
  // Set state variables
  const [user, setUser] = useState();
  const [answersTotal, setAnswersTotal] = useState([]);

  // This useEffect hook will run only once when the page is loaded
  useEffect(() => {
    const login = async () => {
      // Authenticate anonymously
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);

      // Connect to the database
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const answers_total = mongodb
        .db("dasbot-meta")
        .collection("answers_total");

      // Get the initial numbers
      const initialTotal = await user.functions.getAnswersTotal();
      setAnswersTotal(toObject(initialTotal));

      // Process updates
      for await (const change of answers_total.watch()) {
        const key = change.fullDocument?._id;
        const data = change.fullDocument?.count;
        setAnswersTotal((prevAnswersTotal) => ({
          ...prevAnswersTotal,
          [key]: data,
        }));
      }
    };
    login();
  }, []);

  return (
    <div className="App">
      {!!user && (
        <>
          <div>
            <p>Questions answered so far:</p>
            <p>Correct: {answersTotal.correct}</p>
            <p>Incorrect: {answersTotal.incorrect}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
