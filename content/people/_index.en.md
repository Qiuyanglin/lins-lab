---
title: "People"
type: landing
sections:
  - block: people
    content:
      title: "Principal Investigator"
      user_groups: [PI]
    design:
      columns: "1"
    advanced:
      css_class: people-featured

  - block: people
    content:
      title: "Students & Members"
      user_groups: [Postdoc, PhD, Master, RA, Visiting]
    design:
      columns: "3"
    advanced:
      css_class: people-grid

  - block: markdown
    content:
      text: |
        <details class="people-alumni">
          <summary><strong>Alumni</strong> (click to expand)</summary>
          <div class="people-alumni-inner"></div>
        </details>

  - block: people
    content:
      title: ""
      user_groups: [Alumni]
    design:
      columns: "4"
    advanced:
      css_class: people-alumni-grid
---
