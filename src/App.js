import React from 'react'
import Paperbase from './components/partials/Paperbase.js'
import labels from './labels/labels.js'

import {
  Switch,
  Route
} from "react-router-dom"

const categories = labels.sideBar.categories
const about = labels.sideBar.categories[0].children[0]

const App = () => {
  return (
    <div>
      <Switch>

        {categories.map(category => category.children.map(child => (
          <Route path={child.link}>
            <Paperbase id={child.id} sections={child.sections} />
          </Route>       
        )))}

        <Route path='/'>
          <Paperbase id={about.id} sections={about.sections} />
        </Route>

      </Switch>

    </div>
  )
}

export default App;
