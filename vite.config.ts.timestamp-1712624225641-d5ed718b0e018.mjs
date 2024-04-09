// vite.config.ts
import { resolve } from "node:path";
import { loadEnv } from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.4_less@4.2.0/node_modules/vite/dist/node/index.js";
import vueJsx from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import mkcert from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/vite-plugin-mkcert@1.17.5_vite@5.2.8/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import vue from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import checker from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/vite-plugin-checker@0.6.4_eslint@8.57.0_stylelint@16.3.1_typescript@5.4.4_vite@5.2.8_vue-tsc@1.8.27/node_modules/vite-plugin-checker/dist/esm/main.js";
import Components from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import Unocss from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/unocss@0.59.0_postcss@8.4.38_vite@5.2.8/node_modules/unocss/dist/vite.mjs";
import { createSvgIconsPlugin } from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.8/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import dayjs from "file:///D:/company/vue/vue3-antdv-admin/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";
import mockServerPlugin from "file:///D:/company/vue/vue3-antdv-admin/packages/vite-plugin-msw/dist/index.js";
import TinymceResourcePlugin from "file:///D:/company/vue/vue3-antdv-admin/packages/vite-plugin-tinymce-resource/dist/index.js";

// package.json
var package_default = {
  name: "vue3-antdv-admin",
  version: "2.0.0",
  packageManager: "pnpm@8.10.2",
  type: "module",
  engines: {
    node: ">=18"
  },
  author: {
    name: "buqiyuan",
    email: "1743369777@qq.com",
    url: "https://github.com/buqiyuan"
  },
  scripts: {
    preinstall: "npx only-allow pnpm",
    postinstall: "pnpm nx:build",
    bootstrap: "pnpm install",
    serve: "npm run dev",
    dev: "vite dev",
    build: "rimraf dist && cross-env NODE_ENV=production vite build",
    "build:watch": "rimraf dist && cross-env NODE_ENV=production vite build --watch",
    "build:pkg": 'pnpm -r --paralle --filter="./packages/*" run build',
    "nx:build": "nx run-many -t build --exclude @admin-pkg/components",
    "nx:build:watch": "nx watch --all -- nx run \\$NX_PROJECT_NAME:build",
    preview: "npm run build --watch && vite preview",
    "preview:dist": "vite preview",
    openapi: "npx tsx openapi.config.ts",
    "clean:cache": "npx rimraf node_modules/.cache/ && npx rimraf node_modules/.vite",
    "clean:lib": "npx rimraf node_modules packages/*/node_modules",
    lint: "pnpm lint:eslint && pnpm lint:prettier && pnpm lint:stylelint",
    "lint:eslint": 'eslint --cache --max-warnings 0  "{src,mocks}/**/*.{vue,ts,tsx}" --fix',
    "lint:prettier": 'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',
    "lint:stylelint": 'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',
    "lint:lint-staged": "lint-staged",
    prepare: "husky",
    release: "git push && git push origin --tags",
    "gen:changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
    reinstall: "rimraf pnpm-lock.yaml && rimraf package.lock.json && pnpm clean:lib && npm run bootstrap",
    "test:gzip": "npx http-server dist --cors --gzip -c-1",
    "test:br": "npx http-server dist --cors --brotli -c-1"
  },
  dependencies: {
    "@ant-design/icons-vue": "~7.0.1",
    "@iconify/vue": "^4.1.1",
    "@tinymce/tinymce-vue": "^5.1.1",
    "@vueuse/core": "~10.9.0",
    "ant-design-vue": "~4.1.2",
    axios: "~1.6.8",
    "crypto-js": "^4.2.0",
    dayjs: "~1.11.10",
    echarts: "^5.5.0",
    "file-saver": "~2.0.5",
    "lodash-es": "~4.17.21",
    mitt: "~3.0.1",
    nprogress: "~1.0.0-1",
    pinia: "~2.1.7",
    "pinia-plugin-persistedstate": "^3.2.1",
    "qiniu-js": "^3.4.2",
    qs: "~6.12.0",
    sortablejs: "~1.15.2",
    tinymce: "^6.8.3",
    vue: "~3.4.21",
    "vue-echarts": "^6.6.9",
    "vue-i18n": "9.11.0",
    "vue-router": "~4.3.0",
    "vue-types": "~5.1.1",
    "vue-virtual-scroller": "2.0.0-beta.8",
    xlsx: "~0.18.5"
  },
  devDependencies: {
    "@admin-pkg/components": "workspace:*",
    "@admin-pkg/vite-plugin-http2-proxy": "workspace:*",
    "@admin-pkg/vite-plugin-msw": "workspace:*",
    "@admin-pkg/vite-plugin-tinymce-resource": "workspace:*",
    "@commitlint/cli": "~19.2.1",
    "@commitlint/config-conventional": "~19.1.0",
    "@faker-js/faker": "^8.4.1",
    "@iconify-json/ant-design": "^1.1.15",
    "@iconify-json/ep": "^1.1.15",
    "@iconify/json": "^2.2.197",
    "@types/crypto-js": "^4.2.2",
    "@types/lodash-es": "~4.17.12",
    "@types/node": "~20.12.4",
    "@types/sortablejs": "^1.15.8",
    "@typescript-eslint/eslint-plugin": "~7.5.0",
    "@typescript-eslint/parser": "~7.5.0",
    "@umijs/openapi": "^1.11.1",
    "@vitejs/plugin-vue": "~5.0.4",
    "@vitejs/plugin-vue-jsx": "~3.1.0",
    "@vue/tsconfig": "^0.5.1",
    commitizen: "~4.3.0",
    "conventional-changelog-cli": "~4.1.0",
    "core-js": "^3.36.1",
    "cross-env": "~7.0.3",
    eslint: "~8.57.0",
    "eslint-config-prettier": "~9.1.0",
    "eslint-define-config": "~2.1.0",
    "eslint-plugin-import": "~2.29.1",
    "eslint-plugin-prettier": "~5.1.3",
    "eslint-plugin-unused-imports": "^3.1.0",
    "eslint-plugin-vue": "~9.24.0",
    husky: "~9.0.11",
    less: "~4.2.0",
    "lint-staged": "~15.2.2",
    msw: "^2.2.13",
    nx: "^18.2.3",
    postcss: "~8.4.38",
    "postcss-html": "~1.6.0",
    "postcss-less": "~6.0.0",
    prettier: "~3.2.5",
    rimraf: "~5.0.5",
    stylelint: "~16.3.1",
    "stylelint-config-property-sort-order-smacss": "^10.0.0",
    "stylelint-config-recommended": "~14.0.0",
    "stylelint-config-recommended-vue": "~1.5.0",
    "stylelint-config-standard": "~36.0.0",
    "stylelint-order": "~6.0.4",
    "stylelint-prettier": "^5.0.0",
    typescript: "~5.4.4",
    unocss: "^0.59.0",
    "unplugin-vue-components": "~0.26.0",
    vite: "~5.2.8",
    "vite-plugin-checker": "~0.6.4",
    "vite-plugin-inspect": "^0.8.3",
    "vite-plugin-mkcert": "^1.17.5",
    "vite-plugin-svg-icons": "~2.0.1",
    "vue-eslint-parser": "~9.4.2",
    "vue-tsc": "~1.8.27"
  },
  __npminstall_done: false,
  repository: {
    type: "git",
    url: "https://github.com/buqiyuan/vue3-antdv-admin"
  },
  homepage: "https://buqiyuan.gitee.io/vue3-antdv-admin",
  keywords: [
    "vue",
    "ant-design-vue",
    "vue3",
    "ts",
    "tsx",
    "admin",
    "typescript"
  ],
  license: "MIT",
  target: "web",
  pnpm: {
    overrides: {}
  },
  workspaces: [
    "packages/*"
  ]
};

// vite.config.ts
var __vite_injected_original_dirname = "D:\\company\\vue\\vue3-antdv-admin";
var CWD = process.cwd();
var __APP_INFO__ = {
  pkg: package_default,
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
var vite_config_default = ({ command, mode }) => {
  const { VITE_BASE_URL, VITE_DROP_CONSOLE, VITE_MOCK_IN_PROD } = loadEnv(mode, CWD);
  const isDev = command === "serve";
  const isBuild = command === "build";
  return {
    base: VITE_BASE_URL,
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__vite_injected_original_dirname, "./src")
        }
      ]
    },
    plugins: [
      vue(),
      Unocss(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      // 指定 mkcert 的下载源为 coding，从 coding.net 镜像下载证书
      mkcert({ source: "coding" }),
      // 开启 http2 代理
      // Http2Proxy(),
      mockServerPlugin({ build: isBuild && VITE_MOCK_IN_PROD === "true" }),
      TinymceResourcePlugin({ baseUrl: "/tinymce-resource/" }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(CWD, "src/assets/icons")],
        // Specify symbolId format
        symbolId: "svg-icon-[dir]-[name]"
      }),
      Components({
        dts: "types/components.d.ts",
        types: [
          {
            from: "./src/components/basic/button/",
            names: ["AButton"]
          },
          {
            from: "vue-router",
            names: ["RouterLink", "RouterView"]
          }
        ],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
            // css in js
            exclude: ["Button"]
          })
        ]
      }),
      // https://github.com/fi3ework/vite-plugin-checker
      isDev && checker({
        typescript: true,
        // vueTsc: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{.vue,ts,tsx}"'
          // for example, lint .ts & .tsx
        },
        overlay: {
          initialIsOpen: false
        }
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {}
          // additionalData: `
          //   @import '@/styles/variables.less';
          // `,
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 8088,
      open: true,
      proxy: {
        "^/api": {
          // target: 'https://nest-api.buqiyuan.site',
          target: "http://127.0.0.1:7001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        },
        "^/upload": {
          // target: 'https://nest-api.buqiyuan.site/upload',
          target: "http://127.0.0.1:7001/upload",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), "")
        }
      },
      // 提前转换和缓存文件以进行预热。可以在服务器启动时提高初始页面加载速度，并防止转换瀑布。
      warmup: {
        // 请注意，只应该预热频繁使用的文件，以免在启动时过载 Vite 开发服务器
        // 可以通过运行 npx vite --debug transform 并检查日志来找到频繁使用的文件
        clientFiles: ["./index.html", "./src/{components,api}/*"]
      }
    },
    optimizeDeps: {
      include: ["lodash-es", "ant-design-vue/es/locale/zh_CN", "ant-design-vue/es/locale/en_US"]
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE === "true" ? ["console.log", "debugger"] : [],
      supported: {
        // https://github.com/vitejs/vite/pull/8665
        "top-level-await": true
      }
    },
    build: {
      minify: "esbuild",
      cssTarget: "chrome89",
      chunkSizeWarningLimit: 2e3,
      rollupOptions: {
        output: {
          // minifyInternalExports: false,
          manualChunks(id) {
            if (id.includes("/src/locales/helper.ts")) {
              return "antdv";
            } else if (id.includes("node_modules/ant-design-vue/")) {
              return "antdv";
            } else if (/node_modules\/(vue|vue-router|pinia)\//.test(id)) {
              return "vue";
            }
          }
        },
        onwarn(warning, rollupWarn) {
          if (warning.code === "CYCLIC_CROSS_CHUNK_REEXPORT" && warning.exporter?.includes("src/api/")) {
            return;
          }
          rollupWarn(warning);
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29tcGFueVxcXFx2dWVcXFxcdnVlMy1hbnRkdi1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29tcGFueVxcXFx2dWVcXFxcdnVlMy1hbnRkdi1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29tcGFueS92dWUvdnVlMy1hbnRkdi1hZG1pbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0JztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgbW9ja1NlcnZlclBsdWdpbiBmcm9tICdAYWRtaW4tcGtnL3ZpdGUtcGx1Z2luLW1zdy92aXRlJztcbmltcG9ydCBUaW55bWNlUmVzb3VyY2VQbHVnaW4gZnJvbSAnQGFkbWluLXBrZy92aXRlLXBsdWdpbi10aW55bWNlLXJlc291cmNlJztcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tICd2aXRlJztcblxuY29uc3QgQ1dEID0gcHJvY2Vzcy5jd2QoKTtcblxuLy8gXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4vLyBjb25zdCBCQVNFX0VOVl9DT05GSUcgPSBsb2FkRW52KCcnLCBDV0QpO1xuLy8gY29uc3QgREVWX0VOVl9DT05GSUcgPSBsb2FkRW52KCdkZXZlbG9wbWVudCcsIENXRCk7XG4vLyBjb25zdCBQUk9EX0VOVl9DT05GSUcgPSBsb2FkRW52KCdwcm9kdWN0aW9uJywgQ1dEKTtcblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBwa2csXG4gIGxhc3RCdWlsZFRpbWU6IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgY29tbWFuZCwgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgLy8gXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4gIGNvbnN0IHsgVklURV9CQVNFX1VSTCwgVklURV9EUk9QX0NPTlNPTEUsIFZJVEVfTU9DS19JTl9QUk9EIH0gPSBsb2FkRW52KG1vZGUsIENXRCk7XG5cbiAgY29uc3QgaXNEZXYgPSBjb21tYW5kID09PSAnc2VydmUnO1xuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJztcblxuICByZXR1cm4ge1xuICAgIGJhc2U6IFZJVEVfQkFTRV9VUkwsXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXyksXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmluZDogJ0AnLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBVbm9jc3MoKSxcbiAgICAgIHZ1ZUpzeCh7XG4gICAgICAgIC8vIG9wdGlvbnMgYXJlIHBhc3NlZCBvbiB0byBAdnVlL2JhYmVsLXBsdWdpbi1qc3hcbiAgICAgIH0pLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBIG1rY2VydCBcdTc2ODRcdTRFMEJcdThGN0RcdTZFOTBcdTRFM0EgY29kaW5nXHVGRjBDXHU0RUNFIGNvZGluZy5uZXQgXHU5NTVDXHU1MENGXHU0RTBCXHU4RjdEXHU4QkMxXHU0RTY2XG4gICAgICBta2NlcnQoeyBzb3VyY2U6ICdjb2RpbmcnIH0pLFxuICAgICAgLy8gXHU1RjAwXHU1NDJGIGh0dHAyIFx1NEVFM1x1NzQwNlxuICAgICAgLy8gSHR0cDJQcm94eSgpLFxuICAgICAgbW9ja1NlcnZlclBsdWdpbih7IGJ1aWxkOiBpc0J1aWxkICYmIFZJVEVfTU9DS19JTl9QUk9EID09PSAndHJ1ZScgfSksXG4gICAgICBUaW55bWNlUmVzb3VyY2VQbHVnaW4oeyBiYXNlVXJsOiAnL3RpbnltY2UtcmVzb3VyY2UvJyB9KSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgLy8gU3BlY2lmeSB0aGUgaWNvbiBmb2xkZXIgdG8gYmUgY2FjaGVkXG4gICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShDV0QsICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAvLyBTcGVjaWZ5IHN5bWJvbElkIGZvcm1hdFxuICAgICAgICBzeW1ib2xJZDogJ3N2Zy1pY29uLVtkaXJdLVtuYW1lXScsXG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICBkdHM6ICd0eXBlcy9jb21wb25lbnRzLmQudHMnLFxuICAgICAgICB0eXBlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZyb206ICcuL3NyYy9jb21wb25lbnRzL2Jhc2ljL2J1dHRvbi8nLFxuICAgICAgICAgICAgbmFtZXM6IFsnQUJ1dHRvbiddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZnJvbTogJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgICAgbmFtZXM6IFsnUm91dGVyTGluaycsICdSb3V0ZXJWaWV3J10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgQW50RGVzaWduVnVlUmVzb2x2ZXIoe1xuICAgICAgICAgICAgaW1wb3J0U3R5bGU6IGZhbHNlLCAvLyBjc3MgaW4ganNcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsnQnV0dG9uJ10sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maTNld29yay92aXRlLXBsdWdpbi1jaGVja2VyXG4gICAgICBpc0RldiAmJlxuICAgICAgICBjaGVja2VyKHtcbiAgICAgICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgICAgIC8vIHZ1ZVRzYzogdHJ1ZSxcbiAgICAgICAgICBlc2xpbnQ6IHtcbiAgICAgICAgICAgIHVzZUZsYXRDb25maWc6IHRydWUsXG4gICAgICAgICAgICBsaW50Q29tbWFuZDogJ2VzbGludCBcIi4vc3JjLyoqLyouey52dWUsdHMsdHN4fVwiJywgLy8gZm9yIGV4YW1wbGUsIGxpbnQgLnRzICYgLnRzeFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgaW5pdGlhbElzT3BlbjogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgbGVzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIG1vZGlmeVZhcnM6IHt9LFxuICAgICAgICAgIC8vIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgLy8gICBAaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMubGVzcyc7XG4gICAgICAgICAgLy8gYCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDgwODgsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJ14vYXBpJzoge1xuICAgICAgICAgIC8vIHRhcmdldDogJ2h0dHBzOi8vbmVzdC1hcGkuYnVxaXl1YW4uc2l0ZScsXG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgICAgfSxcbiAgICAgICAgJ14vdXBsb2FkJzoge1xuICAgICAgICAgIC8vIHRhcmdldDogJ2h0dHBzOi8vbmVzdC1hcGkuYnVxaXl1YW4uc2l0ZS91cGxvYWQnLFxuICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91cGxvYWQnLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4vdXBsb2FkYCksICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBcdTYzRDBcdTUyNERcdThGNkNcdTYzNjJcdTU0OENcdTdGMTNcdTVCNThcdTY1ODdcdTRFRjZcdTRFRTVcdThGREJcdTg4NENcdTk4ODRcdTcwRURcdTMwMDJcdTUzRUZcdTRFRTVcdTU3MjhcdTY3MERcdTUyQTFcdTU2NjhcdTU0MkZcdTUyQThcdTY1RjZcdTYzRDBcdTlBRDhcdTUyMURcdTU5Q0JcdTk4NzVcdTk3NjJcdTUyQTBcdThGN0RcdTkwMUZcdTVFQTZcdUZGMENcdTVFNzZcdTk2MzJcdTZCNjJcdThGNkNcdTYzNjJcdTcwMTFcdTVFMDNcdTMwMDJcbiAgICAgIHdhcm11cDoge1xuICAgICAgICAvLyBcdThCRjdcdTZDRThcdTYxMEZcdUZGMENcdTUzRUFcdTVFOTRcdThCRTVcdTk4ODRcdTcwRURcdTk4OTFcdTdFNDFcdTRGN0ZcdTc1MjhcdTc2ODRcdTY1ODdcdTRFRjZcdUZGMENcdTRFRTVcdTUxNERcdTU3MjhcdTU0MkZcdTUyQThcdTY1RjZcdThGQzdcdThGN0QgVml0ZSBcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcbiAgICAgICAgLy8gXHU1M0VGXHU0RUU1XHU5MDFBXHU4RkM3XHU4RkQwXHU4ODRDIG5weCB2aXRlIC0tZGVidWcgdHJhbnNmb3JtIFx1NUU3Nlx1NjhDMFx1NjdFNVx1NjVFNVx1NUZEN1x1Njc2NVx1NjI3RVx1NTIzMFx1OTg5MVx1N0U0MVx1NEY3Rlx1NzUyOFx1NzY4NFx1NjU4N1x1NEVGNlxuICAgICAgICBjbGllbnRGaWxlczogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMve2NvbXBvbmVudHMsYXBpfS8qJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbJ2xvZGFzaC1lcycsICdhbnQtZGVzaWduLXZ1ZS9lcy9sb2NhbGUvemhfQ04nLCAnYW50LWRlc2lnbi12dWUvZXMvbG9jYWxlL2VuX1VTJ10sXG4gICAgfSxcbiAgICBlc2J1aWxkOiB7XG4gICAgICBwdXJlOiBWSVRFX0RST1BfQ09OU09MRSA9PT0gJ3RydWUnID8gWydjb25zb2xlLmxvZycsICdkZWJ1Z2dlciddIDogW10sXG4gICAgICBzdXBwb3J0ZWQ6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlL3B1bGwvODY2NVxuICAgICAgICAndG9wLWxldmVsLWF3YWl0JzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgICBjc3NUYXJnZXQ6ICdjaHJvbWU4OScsXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIC8vIG1pbmlmeUludGVybmFsRXhwb3J0czogZmFsc2UsXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICAvL1RPRE8gZml4IGNpcmN1bGFyIGltcG9ydHNcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3NyYy9sb2NhbGVzL2hlbHBlci50cycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnYW50ZHYnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL2FudC1kZXNpZ24tdnVlLycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnYW50ZHYnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvbm9kZV9tb2R1bGVzXFwvKHZ1ZXx2dWUtcm91dGVyfHBpbmlhKVxcLy8udGVzdChpZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd2dWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9ud2Fybih3YXJuaW5nLCByb2xsdXBXYXJuKSB7XG4gICAgICAgICAgLy8gaWdub3JlIGNpcmN1bGFyIGRlcGVuZGVuY3kgd2FybmluZ1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdhcm5pbmcuY29kZSA9PT0gJ0NZQ0xJQ19DUk9TU19DSFVOS19SRUVYUE9SVCcgJiZcbiAgICAgICAgICAgIHdhcm5pbmcuZXhwb3J0ZXI/LmluY2x1ZGVzKCdzcmMvYXBpLycpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJvbGx1cFdhcm4od2FybmluZyk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuIiwgIntcbiAgXCJuYW1lXCI6IFwidnVlMy1hbnRkdi1hZG1pblwiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMFwiLFxuICBcInBhY2thZ2VNYW5hZ2VyXCI6IFwicG5wbUA4LjEwLjJcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xOFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJidXFpeXVhblwiLFxuICAgIFwiZW1haWxcIjogXCIxNzQzMzY5Nzc3QHFxLmNvbVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J1cWl5dWFuXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInByZWluc3RhbGxcIjogXCJucHggb25seS1hbGxvdyBwbnBtXCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcInBucG0gbng6YnVpbGRcIixcbiAgICBcImJvb3RzdHJhcFwiOiBcInBucG0gaW5zdGFsbFwiLFxuICAgIFwic2VydmVcIjogXCJucG0gcnVuIGRldlwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSBkZXZcIixcbiAgICBcImJ1aWxkXCI6IFwicmltcmFmIGRpc3QgJiYgY3Jvc3MtZW52IE5PREVfRU5WPXByb2R1Y3Rpb24gdml0ZSBidWlsZFwiLFxuICAgIFwiYnVpbGQ6d2F0Y2hcIjogXCJyaW1yYWYgZGlzdCAmJiBjcm9zcy1lbnYgTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlIGJ1aWxkIC0td2F0Y2hcIixcbiAgICBcImJ1aWxkOnBrZ1wiOiBcInBucG0gLXIgLS1wYXJhbGxlIC0tZmlsdGVyPVxcXCIuL3BhY2thZ2VzLypcXFwiIHJ1biBidWlsZFwiLFxuICAgIFwibng6YnVpbGRcIjogXCJueCBydW4tbWFueSAtdCBidWlsZCAtLWV4Y2x1ZGUgQGFkbWluLXBrZy9jb21wb25lbnRzXCIsXG4gICAgXCJueDpidWlsZDp3YXRjaFwiOiBcIm54IHdhdGNoIC0tYWxsIC0tIG54IHJ1biBcXFxcJE5YX1BST0pFQ1RfTkFNRTpidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcIm5wbSBydW4gYnVpbGQgLS13YXRjaCAmJiB2aXRlIHByZXZpZXdcIixcbiAgICBcInByZXZpZXc6ZGlzdFwiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwib3BlbmFwaVwiOiBcIm5weCB0c3ggb3BlbmFwaS5jb25maWcudHNcIixcbiAgICBcImNsZWFuOmNhY2hlXCI6IFwibnB4IHJpbXJhZiBub2RlX21vZHVsZXMvLmNhY2hlLyAmJiBucHggcmltcmFmIG5vZGVfbW9kdWxlcy8udml0ZVwiLFxuICAgIFwiY2xlYW46bGliXCI6IFwibnB4IHJpbXJhZiBub2RlX21vZHVsZXMgcGFja2FnZXMvKi9ub2RlX21vZHVsZXNcIixcbiAgICBcImxpbnRcIjogXCJwbnBtIGxpbnQ6ZXNsaW50ICYmIHBucG0gbGludDpwcmV0dGllciAmJiBwbnBtIGxpbnQ6c3R5bGVsaW50XCIsXG4gICAgXCJsaW50OmVzbGludFwiOiBcImVzbGludCAtLWNhY2hlIC0tbWF4LXdhcm5pbmdzIDAgIFxcXCJ7c3JjLG1vY2tzfS8qKi8qLnt2dWUsdHMsdHN4fVxcXCIgLS1maXhcIixcbiAgICBcImxpbnQ6cHJldHRpZXJcIjogXCJwcmV0dGllciAtLXdyaXRlICBcXFwic3JjLyoqLyoue2pzLGpzb24sdHN4LGNzcyxsZXNzLHNjc3MsdnVlLGh0bWwsbWR9XFxcIlwiLFxuICAgIFwibGludDpzdHlsZWxpbnRcIjogXCJzdHlsZWxpbnQgLS1jYWNoZSAtLWZpeCBcXFwiKiovKi57dnVlLGxlc3MscG9zdGNzcyxjc3Msc2Nzc31cXFwiIC0tY2FjaGUgLS1jYWNoZS1sb2NhdGlvbiBub2RlX21vZHVsZXMvLmNhY2hlL3N0eWxlbGludC9cIixcbiAgICBcImxpbnQ6bGludC1zdGFnZWRcIjogXCJsaW50LXN0YWdlZFwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5XCIsXG4gICAgXCJyZWxlYXNlXCI6IFwiZ2l0IHB1c2ggJiYgZ2l0IHB1c2ggb3JpZ2luIC0tdGFnc1wiLFxuICAgIFwiZ2VuOmNoYW5nZWxvZ1wiOiBcImNvbnZlbnRpb25hbC1jaGFuZ2Vsb2cgLXAgYW5ndWxhciAtaSBDSEFOR0VMT0cubWQgLXMgJiYgZ2l0IGFkZCBDSEFOR0VMT0cubWRcIixcbiAgICBcInJlaW5zdGFsbFwiOiBcInJpbXJhZiBwbnBtLWxvY2sueWFtbCAmJiByaW1yYWYgcGFja2FnZS5sb2NrLmpzb24gJiYgcG5wbSBjbGVhbjpsaWIgJiYgbnBtIHJ1biBib290c3RyYXBcIixcbiAgICBcInRlc3Q6Z3ppcFwiOiBcIm5weCBodHRwLXNlcnZlciBkaXN0IC0tY29ycyAtLWd6aXAgLWMtMVwiLFxuICAgIFwidGVzdDpiclwiOiBcIm5weCBodHRwLXNlcnZlciBkaXN0IC0tY29ycyAtLWJyb3RsaSAtYy0xXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudC1kZXNpZ24vaWNvbnMtdnVlXCI6IFwifjcuMC4xXCIsXG4gICAgXCJAaWNvbmlmeS92dWVcIjogXCJeNC4xLjFcIixcbiAgICBcIkB0aW55bWNlL3RpbnltY2UtdnVlXCI6IFwiXjUuMS4xXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJ+MTAuOS4wXCIsXG4gICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIn40LjEuMlwiLFxuICAgIFwiYXhpb3NcIjogXCJ+MS42LjhcIixcbiAgICBcImNyeXB0by1qc1wiOiBcIl40LjIuMFwiLFxuICAgIFwiZGF5anNcIjogXCJ+MS4xMS4xMFwiLFxuICAgIFwiZWNoYXJ0c1wiOiBcIl41LjUuMFwiLFxuICAgIFwiZmlsZS1zYXZlclwiOiBcIn4yLjAuNVwiLFxuICAgIFwibG9kYXNoLWVzXCI6IFwifjQuMTcuMjFcIixcbiAgICBcIm1pdHRcIjogXCJ+My4wLjFcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIn4xLjAuMC0xXCIsXG4gICAgXCJwaW5pYVwiOiBcIn4yLjEuN1wiLFxuICAgIFwicGluaWEtcGx1Z2luLXBlcnNpc3RlZHN0YXRlXCI6IFwiXjMuMi4xXCIsXG4gICAgXCJxaW5pdS1qc1wiOiBcIl4zLjQuMlwiLFxuICAgIFwicXNcIjogXCJ+Ni4xMi4wXCIsXG4gICAgXCJzb3J0YWJsZWpzXCI6IFwifjEuMTUuMlwiLFxuICAgIFwidGlueW1jZVwiOiBcIl42LjguM1wiLFxuICAgIFwidnVlXCI6IFwifjMuNC4yMVwiLFxuICAgIFwidnVlLWVjaGFydHNcIjogXCJeNi42LjlcIixcbiAgICBcInZ1ZS1pMThuXCI6IFwiOS4xMS4wXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwifjQuMy4wXCIsXG4gICAgXCJ2dWUtdHlwZXNcIjogXCJ+NS4xLjFcIixcbiAgICBcInZ1ZS12aXJ0dWFsLXNjcm9sbGVyXCI6IFwiMi4wLjAtYmV0YS44XCIsXG4gICAgXCJ4bHN4XCI6IFwifjAuMTguNVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhZG1pbi1wa2cvY29tcG9uZW50c1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAYWRtaW4tcGtnL3ZpdGUtcGx1Z2luLWh0dHAyLXByb3h5XCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBhZG1pbi1wa2cvdml0ZS1wbHVnaW4tbXN3XCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBhZG1pbi1wa2cvdml0ZS1wbHVnaW4tdGlueW1jZS1yZXNvdXJjZVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAY29tbWl0bGludC9jbGlcIjogXCJ+MTkuMi4xXCIsXG4gICAgXCJAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsXCI6IFwifjE5LjEuMFwiLFxuICAgIFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiXjguNC4xXCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL2FudC1kZXNpZ25cIjogXCJeMS4xLjE1XCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL2VwXCI6IFwiXjEuMS4xNVwiLFxuICAgIFwiQGljb25pZnkvanNvblwiOiBcIl4yLjIuMTk3XCIsXG4gICAgXCJAdHlwZXMvY3J5cHRvLWpzXCI6IFwiXjQuMi4yXCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoLWVzXCI6IFwifjQuMTcuMTJcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwifjIwLjEyLjRcIixcbiAgICBcIkB0eXBlcy9zb3J0YWJsZWpzXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJ+Ny41LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJ+Ny41LjBcIixcbiAgICBcIkB1bWlqcy9vcGVuYXBpXCI6IFwiXjEuMTEuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwifjUuMC40XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwifjMuMS4wXCIsXG4gICAgXCJAdnVlL3RzY29uZmlnXCI6IFwiXjAuNS4xXCIsXG4gICAgXCJjb21taXRpemVuXCI6IFwifjQuMy4wXCIsXG4gICAgXCJjb252ZW50aW9uYWwtY2hhbmdlbG9nLWNsaVwiOiBcIn40LjEuMFwiLFxuICAgIFwiY29yZS1qc1wiOiBcIl4zLjM2LjFcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIn43LjAuM1wiLFxuICAgIFwiZXNsaW50XCI6IFwifjguNTcuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIn45LjEuMFwiLFxuICAgIFwiZXNsaW50LWRlZmluZS1jb25maWdcIjogXCJ+Mi4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwifjIuMjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIn41LjEuM1wiLFxuICAgIFwiZXNsaW50LXBsdWdpbi11bnVzZWQtaW1wb3J0c1wiOiBcIl4zLjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi12dWVcIjogXCJ+OS4yNC4wXCIsXG4gICAgXCJodXNreVwiOiBcIn45LjAuMTFcIixcbiAgICBcImxlc3NcIjogXCJ+NC4yLjBcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwifjE1LjIuMlwiLFxuICAgIFwibXN3XCI6IFwiXjIuMi4xM1wiLFxuICAgIFwibnhcIjogXCJeMTguMi4zXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwifjguNC4zOFwiLFxuICAgIFwicG9zdGNzcy1odG1sXCI6IFwifjEuNi4wXCIsXG4gICAgXCJwb3N0Y3NzLWxlc3NcIjogXCJ+Ni4wLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwifjMuMi41XCIsXG4gICAgXCJyaW1yYWZcIjogXCJ+NS4wLjVcIixcbiAgICBcInN0eWxlbGludFwiOiBcIn4xNi4zLjFcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcHJvcGVydHktc29ydC1vcmRlci1zbWFjc3NcIjogXCJeMTAuMC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkXCI6IFwifjE0LjAuMFwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1yZWNvbW1lbmRlZC12dWVcIjogXCJ+MS41LjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctc3RhbmRhcmRcIjogXCJ+MzYuMC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtb3JkZXJcIjogXCJ+Ni4wLjRcIixcbiAgICBcInN0eWxlbGludC1wcmV0dGllclwiOiBcIl41LjAuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIn41LjQuNFwiLFxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTkuMFwiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJ+MC4yNi4wXCIsXG4gICAgXCJ2aXRlXCI6IFwifjUuMi44XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI6IFwifjAuNi40XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1pbnNwZWN0XCI6IFwiXjAuOC4zXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1ta2NlcnRcIjogXCJeMS4xNy41XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjogXCJ+Mi4wLjFcIixcbiAgICBcInZ1ZS1lc2xpbnQtcGFyc2VyXCI6IFwifjkuNC4yXCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwifjEuOC4yN1wiXG4gIH0sXG4gIFwiX19ucG1pbnN0YWxsX2RvbmVcIjogZmFsc2UsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYnVxaXl1YW4vdnVlMy1hbnRkdi1hZG1pblwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2J1cWl5dWFuLmdpdGVlLmlvL3Z1ZTMtYW50ZHYtYWRtaW5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJ2dWVcIixcbiAgICBcImFudC1kZXNpZ24tdnVlXCIsXG4gICAgXCJ2dWUzXCIsXG4gICAgXCJ0c1wiLFxuICAgIFwidHN4XCIsXG4gICAgXCJhZG1pblwiLFxuICAgIFwidHlwZXNjcmlwdFwiXG4gIF0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInRhcmdldFwiOiBcIndlYlwiLFxuICBcInBucG1cIjoge1xuICAgIFwib3ZlcnJpZGVzXCI6IHt9XG4gIH0sXG4gIFwid29ya3NwYWNlc1wiOiBbXG4gICAgXCJwYWNrYWdlcy8qXCJcbiAgXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLGVBQWU7QUFDL1MsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0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
