const objectArray6_5_5 = 
[
    {
    key: "A001",
    value: "オレンジ",
    },
    {
    key: "B003",
    value: "グレープ",
    },
    {
    key: "C202",
    value: "パイナップル"
    }
]

const map6_6_5 = new Map(objectArray6_5_5.map(object => [object.key, object.value]))

for (const [key, value] of map6_6_5)
    {
        console.log(key, value)
    }