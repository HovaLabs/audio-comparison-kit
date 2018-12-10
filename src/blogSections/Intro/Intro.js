import React from 'react';
import { Image } from 'rebass';

export const Intro = () => (
  <div id="intro">
    <h1>Hovalin v4</h1>
    <h2>Tuning the sound of a 3D printed violin</h2>
    <div>
      <div>
        Over the last few months we've been working on Version 4 of The Hovalin.
        The biggest change from previous versions is that the chamber body is now a single piece.
        Previously, the chamber was made up of 3 major pieces and 2 joints.
      </div>
      <div>
        <div>
          <h3>Before</h3>
          <Image src="http://www.hovalabs.com/assets/hova-instruments/docs/assembly-9b4959dee74e2a89f882e5a067a4aa0ab753b740cb6f20a002b8b8adcbbd8c1f.gif" />
        </div>
        <div>
          <h3>After</h3>
          <Image src="http://www.hovalabs.com/assets/hova-instruments/docs/assembly_v4-6763a1ecf2500d136821a86e0686abbab500c25bdbc0095b7d5c8b8cb6dfeb38.gif" />
        </div>
      </div>
      <div>
        We were ecstatic when we heard how much better the new version sounded. Not to mention how much more solid it was and how much easier it was to assemble.
        In a quest to find out if we could make the Hovalin sound <em>even better</em> we started to tune some of features.
        In this blog we're going to talk about the following:
      </div>
      <ul>
        <li><a href="#tuning">What features we're tuning</a></li>
        <li><a href="#recording">How we compared each version</a></li>
        <li><a href="#results">The Results</a></li>
        <li><a href="#what-we-learned">What we learned</a></li>
        <li><a href="whats-next">What's next</a></li>
      </ul>
    </div>
  </div>
);