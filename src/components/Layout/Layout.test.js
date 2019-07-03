import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout.js'

it('renders without props', () => {
  shallow(<Layout />)
})
