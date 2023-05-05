import DasbotLogo from "./DasbotLogo";

const MainPage = () => (
  <div className="container">
    <div className="row py-3 pt-md-5">
      <div className="col-md-7">
        <DasbotLogo height="90px"/>

        <h1>Say hallo to Dasbot!</h1>
        <p className="lead mb-5">
          <strong>Its mission is to help you learn German articles.</strong>
        </p>
        <p>
          It will send you a short quiz on Telegram every day. With its
          guidance, you will learn the genders of the 2000 most frequently used
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
                  my-3
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
