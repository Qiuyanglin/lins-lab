---
title: 联系我们
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: 联系我们
      text: |-
        欢迎通过电子邮件与我们联系。我们欢迎对生物医疗集成电路、脑机接口电路、传感器接口电路、DNA 测序芯片、模拟与混合信号电路以及光电集成电路等方向感兴趣的学生和研究人员与我们交流，并探讨博士、硕士或实习研究机会。同时，我们也欢迎来自工业界和科研机构的合作与科研资助。
      email: test@example.org
      phone: 888 888 88 88
      address:
        street: 450 Serra Mall
        city: Stanford
        region: CA
        postcode: '94305'
        country: 美国
        country_code: US
      coordinates:
        latitude: '37.4275'
        longitude: '-122.1697'
      directions: 从1号楼入口进入，上楼到二层200办公室
      office_hours:
        - '周一 10:00 - 13:00'
        - '周三 09:00 - 10:00'
      appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: 论坛讨论
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
