//any 任何类型 任何值 放弃了检查 或者!.强制断言
let root:any = document.getElementById('root');
root.style.color = 'red';   //root可能为null，需要给root赋值给any



let root1 = document.getElementById('root1');
root1!.style.color = 'red';   //root可能为null，需要给root赋值给any