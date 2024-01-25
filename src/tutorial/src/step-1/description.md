# 시작하기 {#getting-started}

Vue 튜토리얼에 온 것을 환영합니다.

이 튜토리얼의 목표는 브라우저에서 빠르고 쉽게 Vue 사용 경험을 제공하는 것입니다. 포괄적인 것을 목표로 하지 않으므로 계속 진행하기 전에 모든 것을 이해할 필요가 없습니다. 그러나 완료한 후에는 각 주제에 대해 자세히 설명하는 <a target="_blank" href="/guide/introduction.html">가이드</a>를 읽어봅시다.

## 전제 조건 {#prerequisites}

이 튜토리얼에서는 HTML, CSS 및 JavaScript에 대한 기본적인 지식이 있다고 가정합니다. 프론트엔드 개발을 처음하는 경우, 첫 번째 단계로 프레임워크로 바로 뛰어드는 것이 좋은 생각이 아닐 수 있습니다. 기초를 갖춘 다음 다시 돌아오세요! 다른 프레임워크를 사용해본 경험이 도움이 될 수 있지만 필수는 아닙니다.

## 이 튜토리얼을 사용하는 방법 {#how-to-use-this-tutorial}

오른쪽에서 코드를 편집하고 즉시 업데이트된 결과물을 볼 수 있습니다. 각 단계는 Vue의 핵심 기능을 소개하며, 데모가 작동하도록 코드를 완성해야 합니다. 막히면 작동하는 코드를 보여주는 "보여줘!" 버튼이 표시됩니다. 하지만 그것에 너무 의존하지 맙시다. 스스로 알아내면 더 빨리 배울 수 있습니다.

Vue 2 또는 다른 프레임워크에서 온 숙련된 개발자라면 이 튜토리얼을 최대한 활용하기 위해 조정할 수 있는 몇 가지 설정이 있습니다. 초보자라면 기본값을 사용하는 것이 좋습니다.

<details>
<summary>튜토리얼 설정 세부 사항</summary>

- Vue는 옵션 API와 컴포지션 API의 두 가지 API 스타일을 제공합니다. 이 튜토리얼은 두 스타일 모두에서 작동하도록 설계되었습니다. 상단의 API 스타일 설정 스위치를 사용하여 원하는 스타일을 선택할 수 있습니다. <a target="_blank" href="/guide/introduction.html#api-styles">API 스타일에 대해 자세히 알아보기</a>

- SFC 또는 HTML 모드로 전환할 수도 있습니다. 전자는 대부분의 개발자가 빌드 과정에서 Vue를 사용할 때 사용하는 <a target="_blank" href="/guide/introduction.html#single-file-components">싱글 파일 컴포넌트</a>(SFC) 형식의 코드 예제를 보여줍니다. HTML 모드는 빌드 과정 없이 사용법을 보여줍니다.

<div class="html">

:::tip
자체 애플리케이션에서 빌드 단계 없이 HTML 모드를 사용하려는 경우, 다음 중 하나를 변경하여 임포트하세요:

```js
import { ... } from 'vue/dist/vue.esm-bundler.js'
```

스크립트 내부에서, 또는 빌드 도구를 구성하여 `vue`를 적절히 해석하도록 합니다. [Vite](https://vitejs.dev/)에 대한 샘플 구성:

```js
// vite.config.js
export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
}
```

자세한 내용은 [도구 가이드의 해당 섹션](/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation)을 참조하세요.
:::

</div>

</details>

준비 됐나요? "다음"을 클릭하여 시작합시다.
