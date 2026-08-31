---
title: "论文评述：A 2.5–20 kS/s In-Pixel Direct Digitization ECoG Front End With Submillisecond Stimulation Artifact Recovery"
date: 2026-08-31

authors:

- "王奕如"

summary: "一款基于 180 nm CMOS、采用像素内直接数字化架构并支持亚毫秒级刺激伪影恢复的 8 通道 ECoG 记录前端。"

tags:

- Neural Interface Review
- Neural Interface
- Neural Recording
- ECoG
- Direct Digitization
- Stimulation Artifact Recovery

---

## 论文

**A 2.5–20 kS/s In-Pixel Direct Digitization ECoG Front End With Submillisecond Stimulation Artifact Recovery**

**评述人：** 王奕如

**完整评述：** [查看 Review 文档 (PDF)](paper.pdf)

---

## 简介

本文介绍了一款基于 **180 nm CMOS** 的 8 通道 ECoG 记录前端，将二阶连续时间 ΔΣ 调制器与抽取滤波器直接集成在每个像素内，支持 **2.5–20 kS/s** 的四档记录模式。

该工作并非继续单纯提高前端动态范围或引入复杂的伪影抵消链路，而是针对时间域量化器在大刺激伪影下可能出现的 **相位回绕与恢复缓慢** 问题，通过带超量程检测的快速恢复相位量化器，使系统在短暂饱和后能够稳定地恢复记录。

---

## 主要特点

- 采用像素内二阶 **CT-ΔΣ ADC** 实现神经信号直接数字化
- 采用 **Pseudo-Virtual-Ground Feedforward（PVG FF）** 架构，减少内部反馈 DAC，并改善线性度与面积效率
- 第一级使用带斩波的互补输入 **Gm-C 积分器**，第二级使用基于 **CCO** 的时间域积分器
- 采用带超量程检测的相位量化器，避免大伪影引起的相位回绕与调制器失稳
- 支持 2.5、5、10 和 20 kS/s 四档记录模式，并随带宽按比例缩放功耗
- 每像素集成三级 **CIC 抽取滤波器**，将数据率降低 64 倍
- 在大鼠活体实验中验证边刺激边记录与刺激后快速恢复能力

---

## 主要性能

| 参数 | 性能 |
| --- | ---: |
| 工艺 | 180 nm CMOS |
| 阵列规模 | 4 × 2（8 通道） |
| ADC 架构 | 像素内二阶 CT-ΔΣ ADC |
| 输出采样率 | 2.5–20 kS/s |
| 信号带宽 | 1.25–10 kHz |
| 像素面积 | 0.09 mm²/pixel |
| 功耗 | 14 µW/pixel |
| 模拟 / 数字电源 | 0.9 V / 0.7 V |
| Input-Referred Noise | 6 µVrms |
| ADC SNDR / DR | 78.6 dB / 78.6 dB |
| ADC SFDR | 97.7 dBc |
| 刺激伪影恢复时间 | 0.05–0.4 ms |
| 像素内抽取滤波 | 三级 CIC，64× |

---

## 总结

这篇工作是一个很好的 **直接数字化神经前端快速恢复设计** 案例。其核心并不是保证大刺激伪影始终处于 ADC 输入范围内，而是在超量程发生后防止时间域量化器出现相位回绕，使系统能够在一个抽取输出采样周期内恢复正常记录。

同时，该工作通过可缩放的 Gm-C 与 CCO、像素内抽取滤波器以及分布式时序生成，兼顾了多带宽工作、功耗缩放和未来大规模阵列集成。关于 PVG FF、Gm-C 积分器、CCO、快速恢复相位量化器以及数字后端等电路设计的详细分析，请参阅 **[完整 Review 文档](paper.pdf)**。
