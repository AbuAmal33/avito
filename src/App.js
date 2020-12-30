import Photos from "./Components/Photos";
import Modals from "./Components/Modals";
import {useDispatch} from "react-redux";
import {loadPhotos} from "./Redux/action";
import {useEffect} from "react";
import {Route} from "react-router-dom";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos())
  }, []);

  return (
      <Route exact path="/:id?">
        <div>
          <div>
            <Photos />
          </div>
            <div>
            <Modals />
            </div>
        </div>
      </Route>
    );
}

export default App;
