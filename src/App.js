import img1 from "./source/img1.jpg";
import img2 from "./source/img2.png";

export default function App() {
      return (
        <div>
          <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
            <h1 className="title red">Your name here</h1>
            <br />
            <img src={img1} />
            <br />
            <img src={img2} />
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MQcXEWPesAw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      );
      }