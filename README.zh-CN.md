# UIgly

[English](README.md)

收集实际开发中会遇到的界面问题，例如文案、命名和容易忽略的布局细节。每个案例都是只用 HTML 和 CSS 编写的独立文件，可以直接在浏览器中打开，也可以查看和复制源码。

## 模板

| 模板 | 分类 | 源码 |
| --- | --- | --- |
| 错别字登陆表单 | 文案 | [`templates/typo-login/index.html`](templates/typo-login/index.html) |
| 换行的表单标签 | 表单布局 | [`templates/wrapping-labels/index.html`](templates/wrapping-labels/index.html) |
| 忽粗忽细的文字层级 | 文字排版 | [`templates/inconsistent-type/index.html`](templates/inconsistent-type/index.html) |
| 层层套卡片的表单 | 表单布局 | [`templates/nested-card-form/index.html`](templates/nested-card-form/index.html) |

所有模板都展示在 [m4n9o.com/project/uigly](https://m4n9o.com/project/uigly)。模板列表保存在 [`templates/catalog.json`](templates/catalog.json)。

## 贡献模板

Fork 本仓库，新增 `templates/<slug>/index.html`，把标题和描述添加到 `templates/catalog.json`，并在中英文 README 的模板表格各加一行，然后提交 Pull Request。具体格式和审核标准见 [CONTRIBUTING.md](CONTRIBUTING.md)。

模板使用 MIT 许可证。请提交原创、可独立运行的内容。
