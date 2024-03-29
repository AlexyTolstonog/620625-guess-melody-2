import React from 'react';
import renderer from 'react-test-renderer';
import {SongQuestionScreen} from './song-question-screen';
import {createNodeMock} from '../test/tests.js';

it(`App correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(<SongQuestionScreen
    count={4}
    time={7}
    onClick={jest.fn()}
    question={
      {
        type: `artist`,
        song: {
          artist: `Jim Beam`,
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        },
        answers: [
          {
            picture: `http://placehold.it/134x134`,
            artist: `John Snow`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jack Daniels`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jim Beam`,
          },
        ],
      }
    }
  />,
  options
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
