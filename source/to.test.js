import to from './to.js'

// --------------------------------------------

describe('to.service', () => {
  it('returns a path to the given target from the given source', () => {
    const result = to('../source', import.meta.url)
    expect(result).toContain('/to/source')
  })
})
