
// offsetTop、scrollTop
function isInViewPortOfOne(el) {
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  // 元素距离浏览器顶部距离
  const offsetTop = el.offsetTop
  // 当前视口滚动的距离
  const scrollTop = window.documentElement.scrollTop
  return offsetTop - scrollTop <= viewPortHeight
}

//getBoundingClientRect
function isInViewPort(element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left,
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  );
}
// Intersection Observer
const options = {
  // 表示重叠面积占被观察者的比例，从 0 - 1 取值，
  // 1 表示完全被包含
  threshold: 1.0, 
  root:document.querySelector('#scrollArea') // 必须是目标元素的父级元素
};

// 上段代码中被省略的 callback
const callback = function(entries, observer) { 
  entries.forEach(entry => {
      entry.time;               // 触发的时间
      entry.rootBounds;         // 根元素的位置矩形，这种情况下为视窗位置
      entry.boundingClientRect; // 被观察者的位置举行
      entry.intersectionRect;   // 重叠区域的位置矩形
      entry.intersectionRatio;  // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
      entry.target;             // 被观察者
  });
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector('.target');
observer.observe(target);

