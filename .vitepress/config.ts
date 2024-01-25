import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '문서',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '가이드', link: '/guide/introduction' },
      { text: '튜토리얼', link: '/tutorial/' },
      { text: '예제', link: '/examples/' },
      { text: '시작하기', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: '용어 사전', link: '/glossary/' },
      { text: '애러 참고', link: '/error-reference/' },
      {
        text: 'Vue 2 문서',
        link: 'https://v2.ko.vuejs.org'
      },
      {
        text: 'Vue 2에서 마이그레이션',
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: '온라인 연습장',
    link: 'https://play.vuejs.org'
  },
  {
    text: 'Ecosystem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: '리소스',
        items: [
          { text: '파트너', link: '/partners/' },
          { text: '테마', link: '/ecosystem/themes' },
          { text: 'UI 컴포넌트', link: 'https://ui-libs.vercel.app/' },
          { text: '자격증', link: 'https://certification.vuejs.org/?ref=vuejs-nav' },
          { text: '일자리', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'T-셔츠샵', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: '공식 라이브러리',
        items: [
          { text: 'Vue Router', link: 'https://router.vuejs.org/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
          { text: '도구 가이드', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: '비디오 코스',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue School',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: '도움',
        items: [
          {
            text: 'Discord 채팅',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
            text: 'GitHub 토론',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'DEV Community', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: '뉴스',
        items: [
          { text: '블로그', link: 'https://blog.vuejs.org/' },
          { text: '트위터', link: 'https://twitter.com/vuejs' },
          { text: '이벤트', link: 'https://events.vuejs.org/' },
          { text: '뉴스레터', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: '정보',
    activeMatch: `^/about/`,
    items: [
      { text: '자주 묻는 질문', link: '/about/faq' },
      { text: '팀', link: '/about/team' },
      { text: '출시', link: '/about/releases' },
      {
        text: '커뮤니티 가이드',
        link: '/about/community-guide'
      },
      { text: '행동 강령', link: '/about/coc' },
      {
        text: '다큐멘터리',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: '스폰서',
    link: '/sponsor/'
  },
  {
    text: '파트너',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '시작하기',
      items: [
        { text: '소개', link: '/guide/introduction' },
        {
          text: '빠른 시작',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: '핵심 가이드',
      items: [
        {
          text: '앱 생성',
          link: '/guide/essentials/application'
        },
        {
          text: '템플릿 문법',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: '반응형 기초',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: '계산된 속성',
          link: '/guide/essentials/computed'
        },
        {
          text: '클래스와 스타일 바인딩',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: '조건부 렌더링',
          link: '/guide/essentials/conditional'
        },
        { text: '리스트 렌더링', link: '/guide/essentials/list' },
        {
          text: '이벤트 핸들링',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Form 입력 바인딩', link: '/guide/essentials/forms' },
        {
          text: '생명주기 훅',
          link: '/guide/essentials/lifecycle'
        },
        { text: '감시자', link: '/guide/essentials/watchers' },
        { text: '템플릿 참조', link: '/guide/essentials/template-refs' },
        {
          text: '컴포넌트 기초',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: '컴포넌트 심화',
      items: [
        {
          text: '등록',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: '이벤트', link: '/guide/components/events' },
        { text: '컴포넌트 v-model', link: '/guide/components/v-model' },
        {
          text: '폴스루 속성',
          link: '/guide/components/attrs'
        },
        { text: '슬롯', link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: '비동기 컴포넌트',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: '재사용성',
      items: [
        {
          text: '컴포저블',
          link: '/guide/reusability/composables'
        },
        {
          text: '커스텀 디렉티브',
          link: '/guide/reusability/custom-directives'
        },
        { text: '플러그인', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: '빌트인 컴포넌트',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: '확장하기',
      items: [
        { text: '싱글 파일 컴포넌트', link: '/guide/scaling-up/sfc' },
        { text: '툴', link: '/guide/scaling-up/tooling' },
        { text: '라우팅', link: '/guide/scaling-up/routing' },
        {
          text: '상태 관리',
          link: '/guide/scaling-up/state-management'
        },
        { text: '테스팅', link: '/guide/scaling-up/testing' },
        {
          text: '서버 사이드 렌더링 (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: '모범 사례',
      items: [
        {
          text: '프로덕션 배포',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: '성능',
          link: '/guide/best-practices/performance'
        },
        {
          text: '접근성',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: '보안',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: '타입스크립트',
      items: [
        { text: '개요', link: '/guide/typescript/overview' },
        {
          text: '컴포지션 API & TS',
          link: '/guide/typescript/composition-api'
        },
        {
          text: '옵션 API & TS',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: '추가 주제',
      items: [
        {
          text: 'Vue를 사용하는 다양한 방법들',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: '컴포지션 API FAQ',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: '반응형 심화',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: '렌더링 메커니즘',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: '렌더 함수 & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue와 웹 컴포넌트',
          link: '/guide/extras/web-components'
        },
        {
          text: '애니메이션 기법',
          link: '/guide/extras/animation'
        },
        {
          text: '반응형 변환',
          link: '/guide/extras/reactivity-transform'
        }
        // {
        //   text: 'Building a Library for Vue',
        //   link: '/guide/extras/building-a-library'
        // },
        // { text: 'Custom Renderers', link: '/guide/extras/custom-renderer' },
        // {
        //   text: 'Vue for React Devs',
        //   link: '/guide/extras/vue-for-react-devs'
        // }
      ]
    }
  ],
  '/api/': [
    {
      text: '전역 API',
      items: [
        { text: 'Application', link: '/api/application' },
        {
          text: '일반',
          link: '/api/general'
        }
      ]
    },
    {
      text: '컴포지션 API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: '반응형: 핵심',
          link: '/api/reactivity-core'
        },
        {
          text: '반응형: 유틸리티',
          link: '/api/reactivity-utilities'
        },
        {
          text: '반응형: 고급',
          link: '/api/reactivity-advanced'
        },
        {
          text: '생명주기 훅',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: '종속성 주입',
          link: '/api/composition-api-dependency-injection'
        }
      ]
    },
    {
      text: '옵션 API',
      items: [
        { text: '옵션: 상태', link: '/api/options-state' },
        { text: '옵션: 렌더링', link: '/api/options-rendering' },
        {
          text: '옵션: 생명주기',
          link: '/api/options-lifecycle'
        },
        {
          text: '옵션: 컴포지션',
          link: '/api/options-composition'
        },
        { text: '옵션: 기타', link: '/api/options-misc' },
        {
          text: '컴포넌트 인스턴스',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: '빌트-인',
      items: [
        { text: '디렉티브', link: '/api/built-in-directives' },
        { text: '컴포넌트', link: '/api/built-in-components' },
        {
          text: '특수 엘리먼트',
          link: '/api/built-in-special-elements'
        },
        {
          text: '특수 속성(Attributes)',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: '싱글 파일 컴포넌트',
      items: [
        { text: '문법 설명서', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS 기능', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: '고급 APIs',
      items: [
        { text: '렌더 함수', link: '/api/render-function' },
        { text: '서버 사이드 렌더링', link: '/api/ssr' },
        { text: 'TypeScript 유틸리티 타입', link: '/api/utility-types' },
        { text: '커스텀 렌더러', link: '/api/custom-renderer' },
        { text: '컴파일 타임 플래그', link: '/api/compile-time-flags' }
      ]
    }
  ],
  '/examples/': [
    {
      text: '기초',
      items: [
        {
          text: '안녕 Vue',
          link: '/examples/#hello-world'
        },
        {
          text: '사용자 입력 핸들링',
          link: '/examples/#handling-input'
        },
        {
          text: '속성 바인딩',
          link: '/examples/#attribute-bindings'
        },
        {
          text: '조건문과 반복문',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: '폼(form) 바인딩',
          link: '/examples/#form-bindings'
        },
        {
          text: '단순한 컴포넌트',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: '실습',
      items: [
        {
          text: 'Markdown 편집기',
          link: '/examples/#markdown'
        },
        {
          text: '데이터 가져오기',
          link: '/examples/#fetching-data'
        },
        {
          text: '정렬과 필터가 있는 그리드',
          link: '/examples/#grid'
        },
        {
          text: '트리 뷰',
          link: '/examples/#tree'
        },
        {
          text: 'SVG 그래프',
          link: '/examples/#svg'
        },
        {
          text: '트렌지션으로 모달 구현',
          link: '/examples/#modal'
        },
        {
          text: '트렌지션으로 리스트 구현',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: '숫자세기',
          link: '/examples/#counter'
        },
        {
          text: '온도 단위 변환',
          link: '/examples/#temperature-converter'
        },
        {
          text: '항공편 예약',
          link: '/examples/#flight-booker'
        },
        {
          text: '타이머',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: '원 그리기',
          link: '/examples/#circle-drawer'
        },
        {
          text: '셀(스프레드시트)',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: '스타일 가이드',
      items: [
        {
          text: '개요',
          link: '/style-guide/'
        },
        {
          text: 'A - 필수',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - 강력 추천',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - 추천',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - 주의해서 사용',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'ko-KR',
  title: 'Vue.js',
  description: 'Vue.js - 프로그래시브 자바스크립트 프레임워크',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vue.js' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Vue.js - The Progressive JavaScript Framework'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    localeLinks: [
      {
        link: 'https://vuejs.org',
        text: 'English',
        repo: 'https://github.com/vuejs/docs'
      },
      {
        link: 'https://cn.vuejs.org',
        text: '简体中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-cn'
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja'
      },
      {
        link: 'https://ua.vuejs.org',
        text: 'Українська',
        repo: 'https://github.com/vuejs-translations/docs-uk'
      },
      {
        link: 'https://fr.vuejs.org',
        text: 'Français',
        repo: 'https://github.com/vuejs-translations/docs-fr'
      },
      {
        link: 'https://pt.vuejs.org',
        text: 'Português',
        repo: 'https://github.com/vuejs-translations/docs-pt'
      },
      {
        link: 'https://bn.vuejs.org',
        text: 'বাংলা',
        repo: 'https://github.com/vuejs-translations/docs-bn'
      },
      {
        link: 'https://it.vuejs.org',
        text: 'Italiano',
        repo: 'https://github.com/vuejs-translations/docs-it'
      },
      {
        link: '/translations/',
        text: '번역에 참가하세요!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs-korea',
      appId: 'MEIERGO63D',
      apiKey: '736f8ceee537a06dcd6ecea297cb7942',
      // searchParameters: {
      //   facetFilters: ['version:v3']
      // }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: '/vuejs-translations/docs-ko',
      text: 'GitHub에서 이 페이지 편집'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
