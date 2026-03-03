---
title: "林实验室 – 生物医疗集成电路"
type: landing

sections:
  - block: hero
    content:
      title: "生物医疗集成电路<br>与系统实验室"
      text: |
        **复旦大学**  
        从生物信号到芯片 —— 下一代生物医疗电子。
    design:
      background:
        color: "#000000"
      text_color: light
    advanced:
      css_class: hero-front
    typography:
      title:
        size: "3.0rem"
        line_height: 1.12
        weight: 650
      text:
        size: "1.30rem"
        line_height: 1.65

  - block: markdown
    content:
      text: |
        <style>
          :root { --heroH: 900px; } /* 想更高/更矮改这里：820px / 900px / 1000px */

          .hero-front {
            min-height: var(--heroH) !important;
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            overflow: hidden !important;

            /* ✅ 用完整URL，彻底解决路径问题 */
            background-image: url("https://qiuyanglin.github.io/lins-lab/media/front.png") !important;
            background-size: cover !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
          }

          /* 遮罩（学术风 + 提高清晰度） */
          .hero-front::before{
            content:"";
            position:absolute;
            inset:0;
            background: rgba(0,0,0,0.55);
            z-index: 1;
          }

          /* 保证文字在遮罩上方 */
          .hero-front .container,
          .hero-front .row,
          .hero-front .col {
            position: relative !important;
            z-index: 2 !important;
          }

          /* 兜底：关掉主题在内层可能设置的背景，避免“上面一条有背景、下面空白” */
          .hero-front [style*="background-image"] { background-image: none !important; }
          .hero-front .bg,
          .hero-front .bg-image,
          .hero-front .bg-cover,
          .hero-front .hero-bg,
          .hero-front [class*="bg"] { background-image: none !important; }
        </style>

  - block: markdown
    content:
      text: |
        <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;margin-top:12px;">
          <div style="flex:0 0 260px;">
            <img src="https://qiuyanglin.github.io/lins-lab/media/lin.png" alt="林秋阳" style="width:280px;height:auto;border-radius:16px;border:1px solid rgba(0,0,0,.10);box-shadow:0 8px 22px rgba(0,0,0,.10);">
          </div>
          <div style="flex:1;min-width:280px;max-width:1140px;line-height:1.78;">
            <div style="font-size:1.65rem;font-weight:650;margin:0 0 6px 0;">林秋阳</div>
            <div style="color:rgba(0,0,0,.65);margin:0 0 14px 0;">复旦大学 集成电路与微纳电子创新学院 助理教授<br>国家级青年人才 · 上海市青年人才 · 博士生导师 · IEEE Senior Member</div>
            <div style="margin:0 0 12px 0;">研究聚焦生物医疗模拟/混合信号集成电路，包括可穿戴芯片、植入式脑机接口、电化学芯片、DNA测序芯片与数模转换器。</div>
            <div style="margin:0 0 12px 0;">博士毕业于鲁汶大学，2021年加入IMEC，曾任研究员、高级研究员及模拟电路社区主席。</div>
            <div style="margin:0 0 12px 0;">在集成电路顶级会议与期刊ISSCC、VLSI、JSSC、TBCAS 等发表论文 30 余篇，授权美国专利 2 项。</div>
            <div style="margin-top:10px;"><b>链接：</b><a href="https://scholar.google.com/citations?hl=en&user=YajWlVQAAAAJ&view_op=list_works">Google Scholar</a> · <a href="https://orcid.org/0000-0002-7422-5793">ORCID</a> · <a href="mailto:linqiuyang1991@gmail.com">邮箱</a></div>
          </div>
        </div>
---
