const { Bools } = require('../dist/index')


const bools = new Bools(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])

test('Bools.toObj', () => {
  expect(bools.toObj(0b11001011)).toEqual({
    a: true,
    b: true,
    c: false,
    d: true,
    e: false,
    f: false,
    g: true,
    h: true
  })
  expect(bools.toObj(0b10011011)).toEqual({
    a: true,
    b: true,
    c: false,
    d: true,
    e: true,
    f: false,
    g: false,
    h: true
  })
})

test('Bools.toNum', () => {
  expect(bools.toNum({
    a: true,
    b: true,
    c: false,
    d: true,
    e: false,
    f: false,
    g: true,
    h: true
  })).toBe(0b11001011)
  expect(bools.toNum({
    a: false,
    b: true,
    c: false,
    d: true,
    e: true,
    f: false,
    g: true,
    h: true
  })).toBe(0b11011010)
})

test('combine', () => {
  for(let i = 0; i < 256; i++) {
    expect(bools.toNum(bools.toObj(i))).toBe(i)
  }
})

test('example', () => {
  const userBools = new Bools([
    'isAdmin',
    'isVip',
    'isAuthed',
    'isBanned'
  ])

  expect(userBools.toObj(0b1101)).toEqual({
    isAdmin: true,
    isVip: false,
    isAuthed: true,
    isBanned: true
  })

  expect(userBools.toNum({
    isAdmin: false,
    isVip: false,
    isAuthed: true,
    isBanned: false
  })).toBe(0b0100)

  for(let i = 0; i < 16; i++) {
    expect(userBools.toNum(userBools.toObj(i))).toBe(i)
  }
})
