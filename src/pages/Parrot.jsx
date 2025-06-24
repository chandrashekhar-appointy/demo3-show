import React from 'react';
import '../styles/Parrot.css';

function Parrot() {
  return (
    <div className="main-content">
      <div className="parrot-page">
        <h1>Parrot</h1>
        <h2>The Colorful Talker</h2>
        <p>
          Parrots are a diverse group of birds known for their bright plumage, intelligence, and ability to mimic sounds, including human speech. There are over 400 species of parrots, found mostly in tropical and subtropical regions.
        </p>
        <h3>Physical Characteristics</h3>
        <ul>
          <li>Parrots have strong, curved beaks and zygodactyl feet (two toes facing forward and two backward).</li>
          <li>They come in a variety of colors, including green, red, blue, and yellow.</li>
          <li>Some species, like the macaw, can live for over 50 years.</li>
        </ul>
        <h3>Behavior and Intelligence</h3>
        <ul>
          <li>Parrots are highly social and often live in flocks.</li>
          <li>They are known for their problem-solving skills and playful nature.</li>
          <li>Many parrots can mimic sounds and words, making them popular pets.</li>
        </ul>
        <h3>Conservation Status</h3>
        <p>
          Many parrot species are threatened by habitat loss and the illegal pet trade. Conservation efforts aim to protect wild populations and their habitats.
        </p>
      </div>
    </div>
  );
}

export default Parrot; 