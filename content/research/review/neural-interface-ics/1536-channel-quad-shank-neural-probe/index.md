---
title: "论文评述：A Highly-Integrated 1536-Channel Quad-Shank Monolithic Neural Probe in 55nm CMOS for Full-Band Raw-Signal Recording"
date: 2026-08-24

authors:
  - "王奕如"

summary: "一款基于 55 nm CMOS、面向高密度全频带神经信号记录的 1536 通道单片集成神经探针。"

tags:
  - Neural Interface Review
  - Neural Interface
  - Neural Recording
  - Neural Probe
  - CMOS
---

## 论文

**A Highly-Integrated 1536-Channel Quad-Shank Monolithic Neural Probe in 55nm CMOS for Full-Band Raw-Signal Recording**

**评述人：** 王奕如

**完整评述：** [查看 Review 文档 (PDF)](paper.pdf)

---

## 简介

本文介绍了一款基于 **55 nm CMOS** 的四针脚单片集成神经探针，在 **5120 个电极**中支持最多 **1536 个通道同时记录**。

该工作并非单纯追求单通道的最小面积或最低功耗，而是从系统层面综合考虑高密度神经记录中的 **电极密度、噪声、功耗、面积、多路复用以及数据读出** 等问题。

---

## 主要特点

- **5120 个电极 / 1536 个同时记录通道**
- 采用传统的 **IA–Buffer–MUX–SAR ADC** 信号链
- 动态偏置 Buffer 降低系统功耗
- 集成 96 个共享的 **12-bit SAR ADC**
- 采用共享 ADC reference buffer 支持大规模集成
- 支持 AP 和 LFP 的全频带神经信号记录

---

## 主要性能

| 参数 | 性能 |
|---|---:|
| 工艺 | 55 nm CMOS |
| Recording Electrodes | 5120 |
| Simultaneous Recording Channels | 1536 |
| Probe Structure | Quad-shank |
| ADC | 12-bit SAR |
| Channel Area | 0.012 mm²/ch |
| Total Power | 29.7 mW |
| Power / Channel | 19.34 µW/ch |
| AP Input-Referred Noise | 6.01 ± 0.39 µVrms |
| LFP Input-Referred Noise | 7.58 ± 0.79 µVrms |
| ADC SNDR | 64.92 dB |

---

## 总结

这篇工作是一个很好的 **高密度神经记录系统级优化** 案例，展示了如何在通道密度、噪声、功耗、面积和系统可扩展性之间进行权衡。

同时，该工作也说明，经过合理的系统级与电路级优化，传统的 **IA + MUX + SAR ADC** 架构仍然可以有效支持大规模、高密度神经信号采集。

关于 pixel architecture、instrumentation amplifier、dynamic-bias buffer、SAR ADC 以及 reference buffer 等电路设计的详细分析，请参阅 **[完整 Review 文档](paper.pdf)**。
