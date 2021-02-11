// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.body; //HTML의 body객체를 body 상수에 할당

const defaultWidth = window.innerWidth; //웹 브라우저의 최초크기를 defaultWidth 상수에 할당.새로고침 시 지정된 크기로 설정됨.
const biggerWidth = Math.floor(defaultWidth * 1.3); //defaultWidth에 1.3곱한 값을 biggerWidth 상수에 할당
const smallerWidth = Math.floor(defaultWidth * 0.7); //defaultWidth에 0.7곱한 값을 smallerWidth 상수에 할당

function handleResize() { // function handleResize : window 이벤트중 "resize"이벤트가 작동할때마다 호출된다. 
    const currentWidth = window.innerWidth; // currentWidth는 resize되는 시점에서의 현재 브라우저의 가로길이를 받아온다.
  
    // 이때 if, else if로 현재의 윈도우 크기인 currentWidth와 상수로 선언해놓은 biggerWidth, smallerWidth와 크기 비교를 하여 body의 클래스 이름을 변경한다.

    if (currentWidth > biggerWidth) { //defaultWidth보다 크면 body의 클래스 이름은 bigger로 변경
      body.className = "bigger"; //클래스로 지정된다.
      console.log(body);
    } else if (currentWidth < smallerWidth) { //defaultWidth보다 작으면 body의 클래스 이름은 smaller로 변경
      body.className = "smaller";
      console.log(body);
    } else {
      body.className = "default"; //그외에는 클래스이름이 default로 변경
      console.log(body);
    } //클래스 이름변경에 따라서 body는 CSS에서 설정해놓은 background-color 값을 적용받는다.
  }
  
  window.addEventListener("resize", handleResize); //window 이벤트 선언, 이벤트가 작동할때마다 호출