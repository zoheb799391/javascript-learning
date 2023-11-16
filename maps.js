const numbervalue = [1,1,99,2,3,4,4,5,6,78,2,65,34,3,]
// filter method 

// const newnumbs = numbervalue.filter((num) => {
//     return num > 4
// })
// console.log(numbervalue)
// console.log(newnumbs)

////foreach-method
const mynumbs = []

numbervalue.forEach((num) => {
    if(num>4) {
        mynumbs.push(num)
        
    }
})

console.log(numbervalue)
console.log(mynumbs)

// filters...

const Data = [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
      "version": 1.88
    },
    {
      "name": "Aamir Solangi",
      "language": "Sindhi",
      "id": "IAKPO3R4761JDRVG",
      "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
      "version": 7.27
    },
    {
      "name": "Abla Dilmurat",
      "language": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
      "version": 2.53
    },
    {
      "name": "Adil Eli",
      "language": "Uyghur",
      "id": "6VTI8X6LL0MMPJCC",
      "bio": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
      "version": 6.49
    },
    {
      "name": "Adile Qadir",
      "language": "Uyghur",
      "id": "F2KEU5L7EHYSYFTT",
      "bio": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
      "version": 1.9
    },
    {
      "name": "Abdukerim Ibrahim",
      "language": "Uyghur",
      "id": "LO6DVTZLRK68528I",
      "bio": "Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.",
      "version": 5.9
    },
    {
      "name": "Adil Abro",
      "language": "Sindhi",
      "id": "LJRIULRNJFCNZJAJ",
      "bio": "Etiam malesuada blandit erat, nec ultricies leo maximus sed. Fusce congue aliquam elit ut luctus. Etiam malesuada blandit erat, nec ultricies leo maximus sed. Cras dictum dolor lacinia lectus vehicula rutrum. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero.",
      "version": 9.32
    },
    {
      "name": "Afonso Vilarchán",
      "language": "Galician",
      "id": "JMCL0CXNXHPL1GBC",
      "bio": "Fusce eu ultrices elit, vel posuere neque. Morbi ac tellus erat. Nunc tincidunt laoreet laoreet.",
      "version": 5.21
    },
    {
      "name": "Mark Schembri",
      "language": "Maltese",
      "id": "KU4T500C830697CW",
      "bio": "Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Morbi ultricies consequat ligula posuere eleifend. Vivamus id faucibus velit, id posuere leo. Sed laoreet posuere sapien, ut feugiat nibh gravida at. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
      "version": 3.17
    },
    {
      "name": "Antía Sixirei",
      "language": "Galician",
      "id": "XOF91ZR7MHV1TXRS",
      "bio": "Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Morbi finibus dui sed est fringilla ornare. Duis pellentesque ultrices convallis. Morbi ultricies consequat ligula posuere eleifend.",
      "version": 6.44
    },
    {
      "name": "Aygul Mutellip",
      "language": "Uyghur",
      "id": "FTSNV411G5MKLPDT",
      "bio": "Duis commodo orci ut dolor iaculis facilisis. Nam semper gravida nunc, sit amet elementum ipsum. Donec pellentesque ultrices mi, non consectetur eros luctus non. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
      "version": 9.1
    },
    {
      "name": "Awais Shaikh",
      "language": "Sindhi",
      "id": "OJMWMEEQWMLDU29P",
      "bio": "Nunc aliquet sodales nunc a pulvinar. Ut dictum, ligula eget sagittis maximus, tellus mi varius ex, a accumsan justo tellus vitae leo. Donec pellentesque ultrices mi, non consectetur eros luctus non. Nulla finibus massa at viverra facilisis. Nunc tincidunt laoreet laoreet.",
      "version": 1.59
    },
    {
      "name": "Ambreen Ahmed",
      "language": "Sindhi",
      "id": "5G646V7E6TJW8X2M",
      "bio": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat enim lorem, at tincidunt velit ultricies et. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
      "version": 2.35
    },
    {
      "name": "Celtia Anes",
      "language": "Galician",
      "id": "Z53AJY7WUYPLAWC9",
      "bio": "Nullam ac sodales dolor, eu facilisis dui. Maecenas non arcu nulla. Ut viverra quis eros eu tincidunt. Curabitur quis commodo quam.",
      "version": 8.34
    },
    {
      "name": "George Mifsud",
      "language": "Maltese",
      "id": "N1AS6UFULO6WGTLB",
      "bio": "Phasellus tincidunt sollicitudin posuere. Ut accumsan, est vel fringilla varius, purus augue blandit nisl, eu rhoncus ligula purus vel dolor. Donec congue sapien vel euismod interdum. Cras dictum dolor lacinia lectus vehicula rutrum. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula.",
      "version": 7.47
    },
    {
      "name": "Aytürk Qasim",
      "language": "Uyghur",
      "id": "70RODUVRD95CLOJL",
      "bio": "Curabitur ultricies id urna nec ultrices. Aliquam scelerisque pretium tellus, sed accumsan est ultrices id. Duis commodo orci ut dolor iaculis facilisis.",
      "version": 1.32
    },
    {
      "name": "Dialè Meso",
      "language": "Sesotho sa Leboa",
      "id": "VBLI24FKF7VV6BWE",
      "bio": "Maecenas non arcu nulla. Vivamus id faucibus velit, id posuere leo. Nullam sodales convallis mauris, sit amet lobortis magna auctor sit amet.",
      "version": 6.29
    },
    {
      "name": "Breixo Galáns",
      "language": "Galician",
      "id": "4VRLON0GPEZYFCVL",
      "bio": "Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero. Morbi ac tellus erat. In id elit malesuada, pulvinar mi eu, imperdiet nulla. Vestibulum pharetra libero et velit gravida euismod. Cras dictum dolor lacinia lectus vehicula rutrum.",
      "version": 1.62
    }

  ]


  let data = Data.filter((obj) => {  return obj.version === 7.47
    
  })
  console.log(data)

  let datta = Data.map((item) => {
      return  {Fullname:item.name , biography:item.bio , versioncontrol:item.version }
  })
  console.log(datta)


  // let item = {
  //   version: 2
  // }

  // console.log(item.version >= 2)