import { Link } from "react-router-dom";

const MainPage = () => (
  <div className="container">
    <div className="row py-3 py-md-5">
      <div className="col-md-7">
        <svg
          id="bot-icon"
          viewBox="0 0 24 30"
          x="0px"
          y="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>_</title>
          <g>
            <path d="M 20.5 13 L 20 13 L 20 12 C 20 10.343 18.657 9 17 9 L 13 9 L 13 6.723 C 14.333 5.953 14.333 4.028 13 3.258 C 11.667 2.489 10 3.451 10 4.991 C 10 5.705 10.381 6.365 11 6.723 L 11 9 L 7 9 C 5.343 9 4 10.343 4 12 L 4 13 L 3.5 13 C 2.345 13 1.624 14.25 2.201 15.25 C 2.469 15.714 2.964 16 3.5 16 L 4 16 L 4 17 C 4 18.657 5.343 20 7 20 L 17 20 C 18.657 20 20 18.657 20 17 L 20 16 L 20.5 16 C 21.655 16 22.376 14.75 21.799 13.75 C 21.531 13.286 21.036 13 20.5 13 Z M 19 17 C 18.999 18.104 18.104 18.999 17 19 L 7 19 C 5.896 18.999 5.001 18.104 5 17 L 5 12 C 5.001 10.896 5.896 10.001 7 10 L 17 10 C 18.104 10.001 18.999 10.896 19 12 L 19 17 Z M 17 14.5 C 17 15.655 15.75 16.376 14.75 15.799 C 13.75 15.222 13.75 13.778 14.75 13.201 C 14.978 13.069 15.237 13 15.5 13 C 16.328 13 17 13.672 17 14.5 Z" />
            <circle
              style={{ fill: "rgb(227, 8, 8)" }}
              cx="15.509"
              cy="14.502"
              r="1.257"
              transform="matrix(1.209677, 0, 0, 1.229508, -10.261054, -3.329712)"
            />
          </g>
        </svg>
        <h1>Say hallo to Dasbot!</h1>
        <p className="lead mb-5">
          <strong>Its mission is to help you learn German articles.</strong>
        </p>
        <p>
          It will send you a short quiz on Telegram every day. With its
          guidance, you will learn the genders of 2000 most frequently used
          German nouns.
        </p>
        <p>
          You can change the preferred time and length of the quiz. To
          unsubscribe, turn the quiz off in the settings or just block the bot.
        </p>
        <p>
          For bug reports and suggestions, please send me a&nbsp;
          <a href="https://t.me/wetterkrank" className="text-secondary">
            Telegram message
          </a>
          &nbsp;or an&nbsp;
          <a className="text-secondary" href="mailto:wetterkrank@gmail.com">
            e-mail
          </a>
          .
        </p>
        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
          <a
            className="
                  telegram-button
                  font-lg
                  text-white
                  btn btn-info
                  my-5
                  pl-5
                  position-relative
                "
            href="https://t.me/derdiedas_quizbot"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              className="bi bi-telegram"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
            Get it here
          </a>
          <Link to={`stats`} className="btn btn-link text-secondary">See the live stats</Link>
        </div>

      </div>

      <div
        className="
              col-md-5
              d-flex
              align-items-center
              justify-content-center justify-content-md-end
            "
      >
        <img
          src="img/screenshot.jpg"
          className="rounded mw-100 d-block screenshot"
          alt="..."
        />
      </div>
    </div>
  </div>
);

export default MainPage;
