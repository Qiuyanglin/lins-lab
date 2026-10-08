---
title: "论文评述：A 174.7-dB FoM, 2nd-Order VCO-Based ExG-to-Digital Front-End Using a Multi-Phase Gated-Inverted-Ring Oscillator Quantizer"
date: 2026-10-08

authors:
  - xinao

summary: "一款基于 65 nm CMOS、采用多相 GIRO 量化器的二阶 VCO 生物电直接数字化前端，兼顾高线性度、宽输入范围与低功耗。"

tags:
  - Wearable Biomedical ICs Review
  - Wearable Biomedical ICs
  - Biopotential Recording
  - ExG
  - VCO-Based ADC
  - GIRO Quantizer
---

## 论文

**A 174.7-dB FoM, 2nd-Order VCO-Based ExG-to-Digital Front-End Using a Multi-Phase Gated-Inverted-Ring Oscillator Quantizer**

**评述人：** 季心敖

**完整评述：** [查看 Review 文档 (PDF)](paper.pdf)

---

## 简介

本文介绍了一款面向 **ExG 生物电信号采集** 的直接数字化前端。芯片采用 **65 nm CMOS** 工艺，通过二阶 VCO 架构和多相门控反相环形振荡器（GIRO）量化器，在较大输入范围下保持低噪声与高线性度，支持运动伪迹存在时的微弱生物电信号记录。

其设计重点是降低量化器对失配的敏感性，并利用时间域信号处理，使部分电路的功耗随输入幅度变化。输入阻抗提升电路则减轻前端对电极信号的负载。

---

## 主要特点

- 采用 **VCO 时间域积分与多相量化**，实现二阶噪声整形
- 使用 **GIRO 量化器** 降低失配敏感性，提高线性度
- 支持 **400 mVpp 输入范围**，为运动伪迹和干扰预留裕量
- 利用输入相关的动态功耗特性，在无明显伪迹时节省功耗
- 结合交流耦合、斩波与输入阻抗提升技术，适配生物电采集
- 完成 **ECG、EOG 和 EMG** 测量，并展示含运动伪迹的 ECG 记录

---

## 主要性能

| 参数 | 性能 |
| --- | ---: |
| 工艺 | 65 nm CMOS |
| 核心面积 | 0.075 mm² |
| 模拟 / 数字电源 | 1.2 V / 0.8 V |
| 噪声整形阶数 | 二阶 |
| 输入范围 | 400 mVpp |
| 采样频率 | 200 kHz |
| 信号带宽 | 1 kHz |
| 功耗 | 4.25–5.8 µW |
| Peak SNDR | 92.3 dB |
| 动态范围 | 92.3 dB |
| SFDR | 110.3 dB |
| 输入参考噪声密度 | 110 nV/√Hz |
| 输入阻抗（DC / 带宽边缘） | 60 / 50 MΩ |
| CMRR | 100.2 dB |
| Schreier FoM | 174.7 dB |

---

## 总结

这篇工作展示了 **时间域量化器设计、二阶噪声整形与电极接口优化** 如何共同服务于生物电直接数字化。GIRO 量化器改善失配相关的线性度问题，输入相关的功耗变化降低正常记录时的能耗，高输入阻抗则维持电极接口性能。

需要区分的是，宽输入范围有助于避免运动伪迹导致前端饱和，并不意味着电路直接消除了伪迹。其价值在于保留包含微弱生物电信号的完整采样波形，为后续处理提供基础。

关于二阶 VCO 架构、多相 GIRO 量化器、动态功耗与输入阻抗提升电路的详细分析，请参阅 **[完整 Review 文档](paper.pdf)**。
