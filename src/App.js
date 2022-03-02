import React from 'react';
import './App.css';
import Button from './Components/Button'
import Product from "./Components/Product";
import Tile from "./Components/Tile";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'

function App() {
  return (
      <>
        <nav>
            <Button
            kindofbutton="button"
            click= {() => console.log("to the collection")}
            discription= "to the collection"
            />
            <Button
                kindofbutton="button"
                click= {() => console.log("shop all bags")}
                discription= "shop all bags"
            />
            <Button
                kindofbutton="button"
                click= {() => console.log("pre orders")}
                working="disabled"
                discription= "pre-orders"
            />

        </nav>
      <h1>Handbags & Purses</h1>
          <main>

              <Product
                  discription="Best seller"
                  image={bag1}
                  title="The handy bag"
                  euro="€400,-"
              />

              <Product
                  discription="Best seller"
                  image={bag2}
                  title="The stylish bag"
                  euro="€250,-"
              />

              <Product
                  discription="New collection"
                  image={bag3}
                  title="The simple bag"
                  euro="€300,-"
              />

              <Product
                  discription="New collection"
                  image={bag4}
                  title="The trandy bag"
                  euro="€150,-"
              />

          </main>

              <footer>

                  <Tile title="THE BRAND">
                      <img src="" alt=""/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, placeat, sed. Accusamus, animi aut
                          consectetur cum cumque delectus est,
                          exercitationem laboriosam molestias odio perferendis quis quos vero vitae voluptate voluptatum?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad amet at beatae cum dicta dolor,
                          impedit iure minus molestias neque nisi non officiis reiciendis rem repellat veniam voluptates.</p>
                  </Tile>

                  <Tile
                      image={brand}
                      title="the brand"
                  />

                  <Tile
                      image={story}
                      title="Our story"
                  />

                  <Tile title="OUR STORY">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquam amet animi consectetur consequatur distinctio enim,
                          eveniet facere nihil non rem repellendus repudiandae rerum sed veniam vitae voluptas!</p>
                  </Tile>

              </footer>


      </>
  );
}

export default App;



