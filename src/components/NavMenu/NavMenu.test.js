import React from 'react'
import { shallow } from 'enzyme'

import NavMenu from './NavMenu.js'

it('renders without props', () => {
  shallow(<NavMenu />)
})
