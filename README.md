# Installation

#### npm

```shell
npm i -S bools
```

#### yarn

```shell
yarn add bools
```



# Usage

```javascript
// define boolean fields
const userBools = new Bools([
	'isAdmin',
	'isVip',
    'isAuthed',
    'isBanned'
])

// covert a field-value object to a number
let userBoolsNum = userBools.toNum({
    isAdmin: false,
    isVip: false,
    isAuthed: true,
    isBanned: false
})
console.log(userBoolsNum)  // --> 4

// covert a number to a field-value object
let userBoolsObj = userBools.toObj(userBoolsNum)
console.log(userBoolsObj)  // --> {isAdmin: false, isVip: false, isAuthed: true, isBanned: false}

```

