import React from 'react';
import PropTypes from 'prop-types';

export const GenreQuestionScreen = ({question, onAnsverHendler, checkboxHandler}) => {
  const {answers, genre} = question;
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <div className="timer__value">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnsverHendler();
        }}>
          {answers.map((elem, it) =>
            <div className="track" key={`answer-${it}`}>
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={elem.src}></audio>
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden"
                  type="checkbox" name={`answer-${it}`} value={elem.genre} id={it} onChange={checkboxHandler}/>
                <label className="game__check" htmlFor={it}>Отметить</label>
              </div>
            </div>
          )}
          <button className="game__submit button" type="submit" >Ответить</button>
        </form>
      </section>
    </section>);
};


GenreQuestionScreen.propTypes = {
  onAnsverHendler: PropTypes.func,
  checkboxHandler: PropTypes.func,
  question:
      PropTypes.shape({
        type: PropTypes.string,
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string,
              genre: PropTypes.string
            })
        )
      })
};