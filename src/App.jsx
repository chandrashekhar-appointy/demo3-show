import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>All About Animals</h1>
      <h2>Introduction</h2>
      <p>
        Animals are a diverse group of living organisms that inhabit nearly every corner of our planet. From the deepest oceans to the highest mountains, animals have adapted to a wide range of environments. They play crucial roles in ecosystems, contribute to human well-being, and display fascinating behaviors and characteristics.
      </p>
      <h2>Why Are Animals Important?</h2>
      <ul>
        <li><strong>Biodiversity:</strong> Animals contribute to the rich diversity of life on Earth, supporting healthy ecosystems.</li>
        <li><strong>Ecological Balance:</strong> Many animals are key to maintaining balance in food chains and natural cycles.</li>
        <li><strong>Human Benefits:</strong> Animals provide food, clothing, companionship, and even medical advances through research.</li>
        <li><strong>Cultural Significance:</strong> Animals appear in art, mythology, and traditions across the world.</li>
      </ul>
      <h2>Types of Animals</h2>
      <p>
        Animals can be classified in many ways, but one common method is by their backbone:
      </p>
      <ul>
        <li><strong>Vertebrates:</strong> Animals with a backbone, such as mammals, birds, reptiles, amphibians, and fish.</li>
        <li><strong>Invertebrates:</strong> Animals without a backbone, including insects, spiders, mollusks, and crustaceans.</li>
      </ul>
      <h2>Interesting Facts About Animals</h2>
      <ul>
        <li>The blue whale is the largest animal ever known to have lived on Earth.</li>
        <li>Some birds, like the Arctic tern, migrate thousands of miles each year.</li>
        <li>Octopuses have three hearts and blue blood.</li>
        <li>Elephants are known for their intelligence and strong social bonds.</li>
        <li>Bees play a vital role in pollinating plants, which helps produce much of the food we eat.</li>
      </ul>
      <h2>How Can We Help Animals?</h2>
      <ul>
        <li>Support wildlife conservation efforts and organizations.</li>
        <li>Reduce, reuse, and recycle to minimize pollution and habitat destruction.</li>
        <li>Respect animals in the wild and avoid disturbing their habitats.</li>
        <li>Adopt pets from shelters and provide them with proper care.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        Animals enrich our world in countless ways. By learning about them and taking steps to protect them, we ensure a healthier planet for future generations. Whether you are fascinated by the tiniest insect or the mightiest mammal, there is always more to discover about the amazing world of animals.
      </p>
    </>
  )
}

export default App
