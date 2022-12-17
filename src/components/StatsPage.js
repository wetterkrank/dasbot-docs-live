import * as Realm from "realm-web";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Spinner from "./Spinner/Spinner";

const toObject = (input) =>
  Object.assign(...input.map((elem) => ({ [elem._id]: elem.count })));

const Counter = ({ count }) => {
  return (
    <motion.p
      key={count}
      className="h3"
      initial={{ color: "#000000" }}
      animate={{ color: "#ffffff" }}
      transition={{
        ease: "easeOut",
        duration: 0.3,
        repeat: 1,
        repeatType: "reverse",
      }}
    >
      {count}
    </motion.p>
  );
};

const StatsPage = () => {
  const app = new Realm.App({ id: "dashboard-ddmhi" });
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

  return (
    <>
      <Navbar />
      <div className="container h-100 d-flex flex-column justify-content-center">
        {answersTotal ? (
          <>
            <div className="row mb-5">
              <div className="col-6 text-right text-monospace">
                <p className="h4 mb-3">
                  <span className="d-none d-md-inline">Correct answers </span>✅
                </p>
                <Counter count={answersTotal.correct} />
              </div>
              <div className="col-6 text-left text-monospace">
                <p className="h4 mb-3">
                  ❌
                  <span className="d-none d-md-inline"> Incorrect answers</span>
                </p>
                <Counter count={answersTotal.incorrect} />
              </div>
            </div>
            <div className="row mx-auto">
              <Link to={`/`} className="btn btn-light btn-lg">
                Back
              </Link>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default StatsPage;
