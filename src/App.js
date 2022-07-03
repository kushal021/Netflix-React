import Row from "./Row";
import request from "./request";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchTrending} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorroMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Row
          title="Documentaries"
          fetchUrl={request.fetchDocumentariesMovies}
        />
      </div>
    </>
  );
}

export default App;
