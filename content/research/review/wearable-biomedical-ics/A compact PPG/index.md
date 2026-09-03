---
title: "论文评述：A Compact Photocurrent Recording IC With High-Linearity Dual PWM Buffered R-DACs"
date: 2026-09-03

authors:

- "季心敖"

summary: "一款基于 90 nm CMOS、采用无源积分器、VCO 量化器与粗细两级反馈 R-DAC 的紧凑型高动态范围光电流记录芯片。"

tags:

- Wearable Biomedical ICs Review
- Wearable Biomedical ICs
- Photocurrent Recording
- PPG
- VCO-Based ADC
- PWM DAC

---

## 论文

**A Compact Photocurrent Recording IC With High-Linearity Dual PWM Buffered R-DACs**

**评述人：** 季心敖

**完整评述：** [查看 Review 文档 (PDF)](paper.pdf)

---

## 简介

本文介绍了一款面向 **PPG 等光电流记录应用** 的紧凑型读出芯片。芯片采用 **90 nm CMOS** 工艺，通过无源积分器、VCO 量化器和数字反馈环路，在宽动态范围、低功耗与小面积之间进行系统级权衡。

与传统 TIA + ADC 结构不同，该工作将主要的信号处理压力转移到时间域和数字域。无源积分器负责累积输入电流与反馈电流之差，VCO 量化器完成时间域转换；粗细两级 buffered R-DAC 则分别处理大背景电流和小误差信号，从而兼顾输入范围与电流分辨率。

---

## 主要特点

- 采用 **无源积分器 + VCO 量化器** 构成电流直接数字化通路，避免在第一级使用高性能运放
- VCO 量化器提供一阶噪声整形，并结合数字微分器实现整体二阶量化噪声整形
- 使用 **8-bit 粗调 buffered R-DAC** 处理约 1–256 µA 的大背景电流
- 使用两路 **9-bit PWM fine DAC** 完成 1 µA 以下的细调反馈
- 采用双 PWM 脉冲抑制单 PWM 的偶次谐波，提高反馈 DAC 的线性度
- 通过计数器初始化与反码生成双 PWM，无需两个高速数字比较器，将高速 PWM 逻辑功耗控制在约 2 µW
- 采用数字环路增益校准补偿输入寄生电容引起的带宽变化
- 采用饱和检测与快速建立前馈路径，缩短输入电流突变后的恢复时间
- 在约 108 µA 直流背景电流下完成 PPG 测量，能够分辨收缩峰和舒张峰

---

## 主要性能

| 参数 | 性能 |
| --- | ---: |
| 工艺 | 90 nm CMOS |
| 核心面积 | 0.067 mm² |
| 模拟 / 数字电源 | 1.2 V / 0.7 V |
| 实测采样频率 | 73.2 kHz |
| PWM 时钟频率 | 37.5 MHz |
| 电流分辨率 | 15.6 pA |
| 最大交流输入（未开启粗调扩展） | 约 1 µA |
| 粗调输入范围 | 约 1–256 µA |
| 基础动态范围 | 95.92 dB |
| 扩展动态范围 | 144 dB |
| Peak SNDR | 87.66 dB |
| 高速 PWM 数字功耗 | 约 2 µW |
| PPG 测试直流基线 | 约 108 µA |

---

## 总结

这篇工作是一个很好的 **高动态范围光电流直接数字化前端** 案例。其核心思路是将传统模拟电流读出中的面积和功耗压力转移到时间域与数字域：无源积分器完成低功耗电流积分，VCO 量化器完成时间域转换，粗调 R-DAC 抵消大背景电流，双 PWM fine DAC 则以时间分辨率换取较高的反馈电流分辨率。

其中，双 PWM 不仅减少了细调 DAC 所需的模拟单元，还通过对称脉冲抑制偶次谐波；数字 IIR 反馈、环路增益校准与饱和前馈路径则进一步维持系统在寄生参数和大信号变化下的动态性能。该工作展示了无源积分、时间域量化、数字反馈和粗细两级 DAC 如何共同构成一个适用于可穿戴 PPG 读出的紧凑型光电流采集系统。

关于无源积分器、VCO-based quantizer、双 PWM buffered R-DAC、数字环路增益校准以及饱和检测前馈路径等设计的详细分析，请参阅 **[完整 Review 文档](paper.pdf)**。
