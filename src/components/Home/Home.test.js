import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home.js'

it('renders without props', () => {
  shallow(<Home />)
})
