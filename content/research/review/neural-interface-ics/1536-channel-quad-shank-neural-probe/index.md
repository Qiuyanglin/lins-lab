---
title: "Review: A Highly-Integrated 1536-Channel Quad-Shank Monolithic Neural Probe in 55nm CMOS for Full-Band Raw-Signal Recording"
date: 2026-08-24

authors:
  - "王奕如"

summary: "A 1536-channel monolithic CMOS neural probe for high-density full-band neural recording."

tags:
  - Neural Interface Review
  - Neural Interface
  - Neural Recording
  - Neural Probe
  - CMOS
---

## Paper

**A Highly-Integrated 1536-Channel Quad-Shank Monolithic Neural Probe in 55nm CMOS for Full-Band Raw-Signal Recording**

**Review by:** 王奕如

**PDF:** [View Paper](paper.pdf)

---

## Why This Paper?

这篇工作关注大规模、高密度神经记录系统的实际实现问题。芯片在 **5120 个电极**中支持最多 **1536 个通道同时记录**，需要同时考虑电极间距、面积、功耗、噪声以及系统可扩展性。

在 direct-digitization front-end (DDFE) 越来越受到关注的背景下，本文仍采用传统的 **IA–buffer–MUX–SAR ADC** 架构，并实现了很高的通道密度，因此具有较强的系统设计参考价值。

---

## Architecture

芯片采用 **55 nm CMOS** 工艺，实现 quad-shank monolithic neural probe。

每个 shank 包含 1280 个可选择的 TiN recording electrodes，四个 shank 共包含 **5120 个 recording electrodes**，其中最多 **1536 个通道可以同时读取**。

基本信号链为：

**Electrode → AC-coupled IA → Buffer → MUX → 12-bit SAR ADC → Digital Backend**

系统还集成了：

- 96 × 12-bit SAR ADCs
- 4 shared ADC reference buffers
- 3 capacitor-less LDOs
- Reference generation
- PLL
- Serializer
- LVDS interface

---

## Key Circuit Ideas

### High-Density Pixel Architecture

为了减小 electrode pitch，设计中没有在每个 electrode pixel 内加入独立 buffer，而是采用较低阻抗的 TiN 电极来减轻 interconnect parasitic coupling 引起的 crosstalk。

每个 electrode 可以配置为 recording、calibration 或 ground 三种连接状态。

### Low-Noise Instrumentation Amplifier

前端采用 AC-coupled instrumentation amplifier，主要包括：

- Pseudo-resistor low-frequency feedback
- Capacitive positive feedback for input-impedance boosting
- Chopping for low-frequency noise reduction
- Switched-capacitor common-mode feedback

### Dynamically Biased Buffer

IA 后级 buffer 只在对应 channel 被读取时开启偏置，其余时间关闭。

这种 **dynamic biasing** 机制使 buffer 功耗降低约 **65%**，适合大规模 time-multiplexed neural recording。

### 12-bit SAR ADC

ADC 的主要设计特点包括：

- Top-5-bit semi-switching-back CDAC
- Redundant capacitors for settling-error tolerance
- Majority voting for the lowest bits

这些技术主要用于降低 capacitor mismatch、reference settling 以及 comparator thermal noise 对转换精度的影响。

### Shared ADC Reference Buffer

96 个 SAR ADC 共享 **4 个 reference buffers**。

Reference buffer 同时采用 global error-feedback loop 和 local fast-feedback loop，以兼顾 reference accuracy 和 transient response。

---

## Key Results

| Parameter | Performance |
|---|---:|
| Technology | 55 nm CMOS |
| Recording Electrodes | 5120 |
| Simultaneous Recording Channels | 1536 |
| Probe Structure | Quad-shank |
| ADC | 12-bit SAR |
| Number of ADCs | 96 |
| Channel Area | 0.012 mm²/ch |
| Total Power | 29.7 mW |
| Power / Channel | 19.34 µW/ch |
| AP Input-Referred Noise | 6.01 ± 0.39 µVrms |
| LFP Input-Referred Noise | 7.58 ± 0.79 µVrms |
| ADC SNR | 67.63 dB |
| ADC SNDR | 64.92 dB |

---

## Takeaways

这篇工作的核心并不是追求单个 circuit block 的极限性能，而是在 **channel density、noise、power、area 和 scalability** 之间进行系统级优化。

对于上千通道 neural recording system，电极布局、MUX architecture、ADC sharing、reference distribution、data transmission 和 power management 都会成为关键设计问题。

同时，这篇工作也说明传统的 **IA + MUX + SAR ADC** 架构经过合理的系统级优化，仍然可以实现非常高密度的 neural recording。
