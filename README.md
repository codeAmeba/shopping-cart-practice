## 목적
- 커머스 서비스의 장바구니 기능을 구현하며 Hooks와 Redux를 익힌다.

## 사용기술
- React.js
- Hooks
- Redux
- Styled-components
- React-router-dom
- Jest + React-Testing-Library

## 구현일지
### 20.08.06
무슨 일인지 CRA가 되지 않는다. 에러 메시지를 대충 봤더니 node가 설치된 디렉토리에 문제가 있다고 한다. 그래서 node를 삭제하고 다시 설치했다. 그러나 여전히 CRA가 되지 않는다. 초조하지만 침착하게 다시 에러 메시지를 읽었다. 'package request'가 눈에 띈다. 내 문제가 아니라 패키지를 불러오는 서버측 문제일 수 있겠다는 생각이 든다. 그래서 지인에게 CRA를 한 번 해달라고 부탁하였다. 나와 동일한 에러 메시지가 등장하며 CRA가 진행되지 않는다. 조금 안심했다.

### 20.08.07
CRA가 매끄럽게 동작한다. 기본적인 초기 세팅을 진행했다. 디렉토리를 나누고, 우선적으로 필요한 라이브러리를 설치했다. styled-components와 react-router-dom을 먼저 설치했으며, 각 컴포넌트의 렌더링 유무를 확인하는 기본적인 테스트코드를 작성했다. Redux는 아직 필요할 것 같지 않아서 설치하지 않았다.
mock data를 불러와 `Array.map()`을 사용하여 Products 페이지를 렌더링했다. 그리고, 약간의 스타일을 추가했다.
mock data의 상품을 5개씩 보여주도록 pagination을 구현하기로 했다. 관련 라이브러리가 있으나 Web API로도 간단히 구현할 수 있는 것 같아서 아래와 같이 구현했다.

```javascript
  const getMoreProducts = useCallback(
    () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      et scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      let clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight === scrollHeight) {
        setItemIndex(itemIndex + 5);
        setProductList(productList.concat(productItems.slice(itemIndex + 5, itemIndex + 10)));
      }
    },
    [ itemIndex, productList ]
  );
```

**참고:**
- [javascript.info](https://javascript.info/size-and-scroll)

### 20.08.08
Header 컴포넌트를 만들어 각 페이지 삽입하고 react-router-dom의 Link태그를 사용하여 링크를 걸었다. 그런데, 렌더링은 정상적으로 되는데 테스트에서 에러가 등장했다. 덕분에 Link태그의 올바른 사용법을 익히게 되었다. 이걸 몰랐다는 사실에 너무 큰 충격을 받아 블로그 포스팅으로 기록을 남겼다.
- [React-router-dom에서 Link 태그를 사용하는 법](https://codeameba.netlify.app/blog/how-to-use-link-tag)

### 20.08.09
useState를 사용하여 비어있는 장바구니를 만들고, 상품의 카트 아이콘을 클릭하면 해당 상품의 id와 수량을 추가하는 함수를 만들었다. console.log()로 출력해보니 제대로 추가되는 게 보인다. 음... 그런데 이걸 어떻게 Cart 페이지에 전달하지?
외부에서 공통적으로 사용되는 상태를 관리해야 할 필요성을 느끼게 되었고, 그것이 곧 Redux임을 깨닫게 되었다.