---
title: "Review: A Highly-Integrated 1536-Channel Quad-Shank Monolithic Neural Probe in 55nm CMOS for Full-Band Raw-Signal Recording"
date: 2026-08-24

authors:
  - "王奕如"

summary: "Review of a 1536-channel monolithic CMOS neural probe for high-density full-band neural recording."

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

**Full Review:** [View Review Document (PDF)](paper.pdf)

---

## Overview

This work presents a **1536-channel quad-shank monolithic neural probe** fabricated in 55 nm CMOS, supporting simultaneous recording from up to **1536 out of 5120 electrodes**.

Rather than focusing solely on minimum area or power per channel, the work addresses the system-level trade-offs required for large-scale neural recording, including **electrode density, noise, power, area, multiplexing, and data readout**.

---

## Key Features

- **5120 electrodes / 1536 simultaneous recording channels**
- Conventional **IA–buffer–MUX–SAR ADC** signal chain
- Dynamically biased buffers for reduced power
- 96 shared **12-bit SAR ADCs**
- Shared ADC reference buffers for large-scale integration
- Full-band neural recording for both AP and LFP signals

---

## Key Results

| Parameter | Performance |
|---|---:|
| Technology | 55 nm CMOS |
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

## Takeaway

This work provides a representative example of **system-level optimization for high-density neural recording**, balancing channel density, noise, power, area, and system scalability.

It also demonstrates that the conventional **IA + MUX + SAR ADC** architecture can remain highly competitive for large-scale neural recording when carefully optimized at both the circuit and system levels.

For detailed discussions of the pixel architecture, instrumentation amplifier, dynamic-bias buffer, SAR ADC, and reference buffer design, please refer to the **[full review document](paper.pdf)**.
