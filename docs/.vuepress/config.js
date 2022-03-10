module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "算法模板",
  // description: '算法模板',

  // 主题和它的配置
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    sidebar: {
      "/": [
        {
          text: "算法模板",
          link: "/README.md",
        },
        {
          text: "入门篇",
          // link: "/introduction/",
          children: ["/introduction/golang.md", "/introduction/quickstart.md"],
        },
        {
          text: "数据结构篇",
          children: [
            "/data_structure/binary_tree.md",
            "/data_structure/linked_list.md",
            "/data_structure/stack_queue.md",
            "/data_structure/binary_op.md",
          ],
        },
        {
          text: "基础算法篇",
          children: [
            "/basic_algorithm/binary_search.md",
            "/basic_algorithm/sort.md",
            "/basic_algorithm/dp.md",
          ],
        },
        {
          text: "算法思维",
          children: [
            "/advanced_algorithm/recursion.md",
            "/advanced_algorithm/slide_window.md",
            "/advanced_algorithm/binary_search_tree.md",
            "/advanced_algorithm/backtrack.md",
          ],
        },
      ],
    },
  },  
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
        // hotKeys: ["Control","k"]
      },
    ],
  ],
};
