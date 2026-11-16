---
title: "林实验室 – 生物医疗集成电路"
type: lab-home
design:
  css_class: lab-landing
summary: "复旦大学生物医疗集成电路与系统实验室，研究低功耗模拟与混合信号芯片及其在生物医疗系统中的应用。"
hero:
  eyebrow: "复旦大学 · 林实验室"
  title: "生物医疗集成电路与系统实验室"
  title_lines: ["生物医疗集成电路", "与系统实验室"]
  description: "面向生物医疗与智能感知，研究低功耗模拟与混合信号芯片，贯通电路架构、芯片实现与系统验证。"
  primary_label: "探索研究方向"
  secondary_label: "学术论文"
  image_alt: "可穿戴健康监测、神经接口、电化学生物传感、DNA 测序与模拟传感芯片；右侧芯片标注 ADC、DAC、AFE。"
  image_caption: "从生物信号感知到芯片与系统"
  image_link_label: "查看完整研究主题图"
topics:
  title: "研究方向"
  link_label: "研究总览"
  items:
    - title: "可穿戴生物传感"
      description: "低功耗生理信号采集与处理"
      anchor: wearable
    - title: "神经接口"
      description: "脑机接口与神经信号读出"
      anchor: neural
    - title: "电化学与纳米孔接口"
      description: "面向分子检测与 DNA 测序"
      anchor: molecular
    - title: "模拟与混合信号电路"
      description: "数据转换器与模拟前端"
      anchor: analog
selected_research:
  title: "相关研究成果"
  intro: "以下展示各研究方向中的部分工作，更多成果请见论文列表。"
  all_label: "全部论文"
  paper_label: "阅读论文"
  items:
    - id: nanopore
      title: "固态纳米孔并行读出"
      venue: "VLSI 2026"
      description: "面向 DNA 测序与高通量单分子检测。"
      page: publication/a-16-channel-97pa-rms-1mhz-bandwidth-ic-for-solid-state-nanopore-2026
      image: media/research-nanopore-application-no-labels.png
      image_alt: "固态纳米孔工作原理：DNA 穿孔引起离子电流变化。"
    - id: neural
      title: "下一代神经接口电路"
      venue: "CICC 2026 · 综述"
      description: "面向脑机接口、神经信号监测与神经调控。"
      page: publication/cicc2026
      image: media/selected-neural-cicc2026.png
      image_alt: "CICC 2026 神经接口综述中的脑部与植入式电极示意。"
    - id: electrochemical
      title: "多参数电化学传感接口"
      venue: "ISSCC 2023"
      description: "面向生物培养、环境监测与生化指标检测。"
      page: publication/212-a-22w-peak-power-multimodal-electrochemical-sensor-interface-ic-fo-2023
      image: media/research-bioreactor-overview.jpg
      image_crop: "405x673 TopLeft"
      image_alt: "ISSCC 2023 论文中的生物反应器与电化学传感应用示意。"
    - id: ppg
      title: "高动态范围 PPG 读出"
      venue: "ISSCC 2021"
      description: "通过胸部光学感知，支持心率、血氧与呼吸监测。"
      page: publication/283-a-28w-134db-dr-2-nd-order-noise-shaping-slope-light-to-digital-con-2021
      image: media/research-chest-ppg-application.jpg
      image_alt: "后续 JTEHM 2024 应用论文中的胸部 PPG 光学传感器佩戴示意。"
team:
  title: "团队与学术指导"
  link_label: "实验室成员"
  profile_label: "完整简介"
  profiles:
    - name: "林秋阳"
      label: "课题组负责人"
      role: "复旦大学芯片与系统前沿技术研究院 · 助理教授、博士生导师"
      image: /media/lin.webp
      width: 1024
      height: 1536
      page: authors/qiuyang-lin
      paragraphs:
        - "研究聚焦生物医疗模拟与混合信号集成电路，包括可穿戴芯片、植入式脑机接口、电化学与 DNA 测序芯片、数据转换器及 AI 芯片。"
        - "博士毕业于鲁汶大学与 IMEC，2015 年加入 IMEC，曾任博士研究员、研究员、高级研究员、项目经理及模拟电路社区主席。在 ISSCC、VLSI、JSSC、TBCAS 等会议和期刊发表论文 30 余篇，授权美国专利 2 项。"
      details_label: "人才计划与学术身份"
      details:
        - "国家级青年人才 · 上海市青年人才 · IEEE Senior Member"
      links:
        - label: Google Scholar
          url: "https://scholar.google.com/citations?hl=en&user=YajWlVQAAAAJ&view_op=list_works"
        - label: ORCID
          url: "https://orcid.org/0000-0002-7422-5793"
        - label: 邮箱
          url: "mailto:linqiuyang@fudan.edu.cn"
    - name: "刘明"
      label: "首席科学顾问"
      role: "复旦大学芯片与系统前沿技术研究院院长 · 中国科学院院士"
      image: /media/Liu.webp
      width: 1600
      height: 2400
      page: authors/ming
      paragraphs:
        - "长期从事微电子科学技术研究，在新型存储器、微纳电子器件、先进半导体材料结构与集成电路微纳加工技术等方向取得系统性创新成果。"
        - "指导实验室围绕生物医疗集成电路、脑机接口芯片、智能传感系统与下一代集成电路技术开展前沿交叉研究。"
      details_label: "学术任职与荣誉"
      details:
        - "IEEE Fellow · 发展中国家科学院院士"
        - "中国科学院微电子研究所研究员、博士生导师"
        - "中国科学院微电子器件与集成技术重点实验室主任"
        - "国家重大基础研究计划项目首席科学家 · 国家杰出青年科学基金获得者"
        - "国家自然科学基金委创新群体负责人 · 国家百千万人才工程入选者"
news:
  title: "近期动态"
  link_label: "全部新闻"
  date_format: "2006.01.02"
join:
  title: "加入实验室"
  description: "欢迎对生物医疗集成电路、模拟与混合信号电路研究感兴趣的同学与我们联系。"
  label: "了解招生与科研机会"
---
