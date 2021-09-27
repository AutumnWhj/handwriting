/**
 * 每间隔num次执行fn
 * @param fn
 * @param num 间隔次数
 * @param config
 */
function intervalFn(
  fn,
  num,
  config,
) {
  const RECORD_NUM = num;
  let cur = 1;
  const { immediate } = config || {};
  let inited = false;
  return function (...args) {
    if (cur % RECORD_NUM === 0) {
      fn(...args);
    } else {
      if (immediate && !inited) {
        fn(...args);
      }
    }
    inited = true;
    cur++;
  };
}
function test(){
  console.log("test1123")
}

const asd =  intervalFn(test,3)


asd()
asd()
asd()

asd()
asd()
asd()

asd()
asd()
asd()

asd()
asd()
asd()