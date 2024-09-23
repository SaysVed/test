import React from 'react';
import img from './../assets/image.png'

function Main() {
  return (
    <main>
      <section id="email">
        <h2>Working with Email</h2>
        <p>Email is an essential tool for communication in the global network. You can manage your work, exchange files, and track conversations.</p>
        <p>Example of an email structure:</p>
        <table border="1">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To</td>
              <td>Recipient's email address</td>
            </tr>
            <tr>
              <td>CC</td>
              <td>Other recipients to be copied in</td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>The main topic of the email</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="software">
        <h2>Website Creation Software</h2>
        <p>Popular tools include:</p>
        <ul>
          <li>HTML</li>
          <li>FrontPage</li>
          <li>WordPress</li>
        </ul>
        <p>These tools allow for creating websites with minimal effort and coding knowledge.</p>
      </section>

      <section id="structure">
        <h2>Page Structure Design</h2>
        <iframe src="https://www.example.com" title="Example website" style={{ width: "100%", height: "300px" }}></iframe>
        <p>Frame example used for embedding another webpage inside this webpage.</p>
      </section>

      <section id="multimedia">
        <h2>Multimedia & Animation</h2>
        <p>Example of an image:</p>
        <img src={img} alt="Example" className="animated-img" />
        <p>Example of a video:</p>
        <video controls width="400">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}

export default Main;
