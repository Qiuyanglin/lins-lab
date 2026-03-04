---
title: "成员"
type: landing
sections:
  - block: people
    content:
      title: "负责人"
      user_groups: [负责人]
    design:
      columns: "1"
    advanced:
      css_class: people-featured

  - block: people
    content:
      title: "学生"
      user_groups: [博士后, 博士生, 硕士生, 科研助理, 访问学生]
    design:
      columns: "3"
    advanced:
      css_class: people-grid

  - block: markdown
    content:
      text: |
        <details class="people-alumni">
          <summary><strong>已毕业学生</strong>（点击展开）</summary>
          <div class="people-alumni-inner"></div>
        </details>

  - block: people
    content:
      title: ""
      user_groups: [已毕业学生]
    design:
      columns: "4"
    advanced:
      css_class: people-alumni-grid
---
