import React from 'react';

import { Material } from './Material';
import { ChamberThickness } from './ChamberThickness';
import { ViolinBridge } from './ViolinBridge';
import { Orientation } from './Orientation';
import { Everything } from './Everything';

export const Tuning = () => (
  <div id="tuning">
    <h2>What features we're tuning</h2>
    <div>
      We decided to focus on tuning 4 features:
      <ul>
        <li>Violin Bridge</li>
        <li>Chamber Thickness</li>
        <li>Material</li>
        <li>Orientation</li>
      </ul>
    </div>
    <ViolinBridge />
    <ChamberThickness />
    <Material />
    <Orientation />
    <Everything />
  </div>
);
