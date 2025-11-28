import _ from 'lodash';
export const ideas = _.times(100, (i) => ({
  nick: `nick-${i}`,
  name: `Idea ${i}`,
  description: `Description of idea ${i}`,
  text: _.times(100, (j) => `<p>text paragraph ${j} of idea ${i}...</p>`).join(''),
}));
