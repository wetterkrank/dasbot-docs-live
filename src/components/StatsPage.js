import * as Realm from "realm-web";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Spinner from "./Spinner/Spinner";

const StatsPage = () => {
  const toObject = (input) =>
    Object.assign(...input.map((elem) => ({ [elem._id]: elem.count })));

  const app = new Realm.App({ id: "dashboard-ddmhi" });

  // Set state variables
  const [answersTotal, setAnswersTotal] = useState(null);

  // This useEffect hook will run only once when the page is loaded
  useEffect(() => {
    const login = async () => {
      // Authenticate anonymously
      const user = await app.logIn(Realm.Credentials.anonymous());

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
        const value = change.fullDocument?.count;
        setAnswersTotal((previous) => ({
          ...previous,
          [key]: value,
        }));
      }
    };

    login();
  }, []);

  const Stats = ({ answersTotal }) => (
    <>
      <div className="row mb-5">
        <div className="col-6 text-right text-monospace">
          <p className="h4 mb-3"><span className="d-none d-md-inline">Correct answers </span>✅</p>
          <p className="h3"> {answersTotal.correct} </p>
        </div>
        <div className="col-6 text-left text-monospace">
          <p className="h4 mb-3">❌<span className="d-none d-md-inline"> Incorrect answers</span></p>
          <p className="h3"> {answersTotal.incorrect} </p>
        </div>
      </div>
      <div className="row mx-auto">
        <Link to={`/`} className="btn btn-light btn-lg">Back</Link>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container h-100 d-flex flex-column justify-content-center">
        {answersTotal ? <Stats answersTotal={answersTotal} /> : <Spinner />}
      </div>
    </>
  );
};

export default StatsPage;
