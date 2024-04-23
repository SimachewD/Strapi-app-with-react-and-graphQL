import { BrowserRouter, Route, Routes} from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri:'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  return (
      <div className="App">
        <BrowserRouter>
          <ApolloProvider client={client}>
            <SiteHeader />
            <Routes>
              <Route exact path="/" element= { <Homepage /> } />
              <Route path="/details/:id" element= { <ReviewDetails /> } />
              <Route path="/category/:id" element= { <Category /> } />
            </Routes>
          </ApolloProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
