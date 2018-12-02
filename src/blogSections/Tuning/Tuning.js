import React from 'react';

export const Tuning = () => (
  <div id="tuning">
    <h2>What features we're tuning</h2>
    <div>
      We decided to focus on tuning 3 features:
      <ul>
        <li>Material</li>
        <li>Chamber Thickness</li>
        <li>Violin Bridge</li>
      </ul>
    </div>
    <div>
      Here are the questions we hoped to answer by tuning the design.
    </div>
    <div>
      <table>
        <tr>
          <th>Question we are trying to answer</th>
          <th>Chamber Wall Thickness (mm)</th>
          <th>Chamber Perimeters</th>
          <th>Material</th>
          <th>Color</th>
          <th>Temp (C)</th>
          <th>Bridge Type</th>
        </tr>
        <tr>
          <td>How does the initial design sound?</td>
          <td>1.5</td>
          <td>2 + wiggle</td>
          <td>PLA</td>
          <td>Black</td>
          <td>215</td>
          <td>plastic</td>
        </tr>
        <tr>
          <td>Does matte fiber PLA sound better?</td>
          <td>1.5</td>
          <td>2 + wiggle</td>
          <td>HTPLA</td>
          <td>Matte Black</td>
          <td>230</td>
          <td>plastic</td>
        </tr>
        <tr>
          <td>Does a wood bridge sound better?</td>
          <td>1.5</td>
          <td>2 + wiggle</td>
          <td>PLA</td>
          <td>White</td>
          <td>215</td>
          <td>wood</td>
        </tr>
        <tr>
          <td>What about a wood bridge with a matte fiber chamber?</td>
          <td>1.5</td>
          <td>2 + wiggle</td>
          <td>HTPLA</td>
          <td>Matte White</td>
          <td>230</td>
          <td>wood</td>
        </tr>
        <tr>
          <td>Are 2 wiggles or 4 perimeters better?</td>
          <td>1.6</td>
          <td>4</td>
          <td>PLA</td>
          <td>yellow</td>
          <td>215</td>
          <td>wood</td>
        </tr>
        <tr>
          <td>Do thicker walls sound better?</td>
          <td>2.8</td>
          <td>7</td>
          <td>PLA</td>
          <td>green</td>
          <td>215</td>
          <td>wood</td>
        </tr>
        <tr>
          <td>Will printing sideways sound better?</td>
          <td>1.6</td>
          <td>4</td>
          <td>PLA</td>
          <td>red</td>
          <td>215</td>
          <td>wood</td>
        </tr>
      </table>
    </div>
  </div>
);
