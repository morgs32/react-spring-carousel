import React from 'react';
import Carousel from '../Carousel'
import * as rtl from '@testing-library/react'

describe('Carousel', () => {
  it('works', () => {
    rtl.render(
      <Carousel>
        <div>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </div>
      </Carousel>
    )
  })
})
