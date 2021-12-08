import { render } from '@testing-library/react'

import Players from './Players'

it('Should fetch then render a list of Players', async () => {
  const { container } = await render(<Players />)
  expect(container).toMatchSnapshot()
})
