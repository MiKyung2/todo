import Lottie from 'react-lottie-player/dist/LottiePlayerLight';

import graph2_1 from '../assets/2_1.json';
import graph2_2 from '../assets/2_2.json';
import graph2_3 from '../assets/2_3.json';
import graph2_4 from '../assets/2_4.json';

import graph3_1 from '../assets/3_1.json';
import graph3_2 from '../assets/3_2.json';
import graph3_3 from '../assets/3_3.json';
import graph3_4 from '../assets/3_4.json';

import graph5_1 from '../assets/5_1.json';
import graph5_2 from '../assets/5_2.json';
import graph5_3 from '../assets/5_3.json';
import graph5_4 from '../assets/5_4.json';

import graph7_1 from '../assets/7_1.json';
import graph7_2 from '../assets/7_2.json';
import graph7_3 from '../assets/7_3.json';
import graph7_4 from '../assets/7_4.json';

function Graph() {
  const graphArray = [
    [graph2_1, graph2_2, graph2_3, graph2_4],
    [graph3_1, graph3_2, graph3_3, graph3_4],
    [graph5_1, graph5_2, graph5_3, graph5_4],
    [graph7_1, graph7_2, graph7_3, graph7_4],
  ];

  const value = 20;

  return (
    <>
      {graphArray.map((row) => (
        <div style={{ display: 'flex' }}>
          {row.map((graph, i) => {
            if (i === 0) {
              return (
                <Lottie
                  animationData={graph}
                  play
                  loop={false}
                  segments={[0, value]}
                  style={{ width: 296, height: 320 }}
                />
              );
            }
            return (
              <Lottie
                animationData={graph}
                play={false}
                goTo={value}
                style={{ width: 296, height: 320 }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Graph;
