export class Bools<Field extends string> {
  _fields: Field[]

  constructor(fields: Field[]) {
    this._fields = fields
  }

  toNum(obj: {[P in Field]: boolean}): number {
    let num = 0
    for(let i = 0; i < this._fields.length; i++) {
      let key = this._fields[i]
      if(obj[key]) {
        num |= 1 << i
      }
    }
    return num
  }

  toObj(num: number): {[P in Field]: boolean} {
    let obj: Record<string, boolean> = { }
    for(let i = 0; i < this._fields.length; i++) {
      let key = this._fields[i]
      obj[key] = (1 << i & num) > 0
    }
    return <{[P in Field]: boolean}>obj
  }
}

export default Bools
