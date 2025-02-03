import comics from "../data/dataComics";
import Card from "./Card";

export default function ListProduct() {
    return (
      <section className="products">
        <div className="container">
        <button className="btn-series">CURRENT SERIES</button>
          <div className="row">
            {comics.map((elm) => {
              return (
                <div className="col" key={comics.id}>
                  <Card image={elm.thumb} title={elm.series} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-load">LOAD MORE</button>
        </div>
      </section>
    );
  }