import React from 'react';


// const ProductPage = lazy(() =>
//   import(
//     './views/ProductPage/ProductPage.jsx' /* webpackChunkName: "product-page" */
//   ),
// );
// const ProductDetailsPage = lazy(() =>
//   import(
//     './views/ProductDetailsPage/ProductDetailsPage.jsx' /* webpackChunkName: "product-details-page" */
//   ),
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }
  


  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Mistake: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name} </li>
          ))}
        </ul>
      )
    }
  }
}

export default App;

// export default function App() {
//   return (
//     <Suspense fallback={<h1>Loading...</h1>}>
//       <div className="App">
//       <header className="App-header">
//         <p>hello there</p>
//       </header>
//     </div>
//         {/* <Switch>
//           <Route exact path={routes.home} component={HomePage} />
//           <Route path={routes.MovieDetails} component={MovieDetailsPage} />
//           <Route path={routes.page} component={MoviesPage} />
//           <Route component={NotFoundView} />
//         </Switch> */}
//       </Suspense>
//   )
// }
