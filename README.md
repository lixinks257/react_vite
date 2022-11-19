# 技术栈总结

1. react18.0 + react-dom18.0
2. vite3.0(构建打包)
3. TS（类型检查）
4. antd4.0(UI组件) + antd-icons图标
5. styled-components(css in js)
6. less+ sass
7. react-router-dom6.0(路由版本)
8. axios(请求封装)
9. hook的部分使用(lazy(懒加载路由), memo(优化组件渲染), useCallback, useContext(上下文，全部共享属性), useState, useEffect, useRef)
10. ahook封装好的hooks
11. jsencrypt（登录账号加密）
12. lodash(js工具库)
13. redux + react-redux + reduxjs/toolkit(简化react-redux的相关操作)


# 问题记录

1. 安装@types/node,否则部分模块解析会报错
2. 添加typings.d.ts 声明部分模块
3. react16.8版本之后，新增hooks,增强了函数式组件的功能（1.state（useState）  2.生命周期(useEffect) 3.ref(useRef)）