---
title: "Paper Review: A 174.7-dB FoM, 2nd-Order VCO-Based ExG-to-Digital Front-End Using a Multi-Phase Gated-Inverted-Ring Oscillator Quantizer"
date: 2026-10-08

authors:
  - xinao

summary: "A 65 nm CMOS second-order VCO-based biopotential front-end that combines a multiphase GIRO quantizer, a wide input range, and input-impedance boosting for high-linearity, low-power direct digitization."

tags:
  - Wearable Biomedical ICs Review
  - Wearable Biomedical ICs
  - Biopotential Recording
  - ExG
  - VCO-Based ADC
  - GIRO Quantizer
---

## Paper

**A 174.7-dB FoM, 2nd-Order VCO-Based ExG-to-Digital Front-End Using a Multi-Phase Gated-Inverted-Ring Oscillator Quantizer**

**Reviewer:** Xinao Ji

**Full Review:** [Read the Review Document (PDF)](paper.pdf)

---

## Introduction

This paper presents a direct-digitization front-end for **ExG biopotential acquisition**. Fabricated in **65 nm CMOS**, the chip combines a second-order VCO-based architecture with a multiphase gated-inverted-ring oscillator (GIRO) quantizer to achieve low noise and high linearity over a wide input range, supporting the acquisition of weak biopotential signals in the presence of motion artifacts.

The design reduces the quantizer’s sensitivity to mismatch and uses time-domain signal processing to make part of the circuit’s power consumption vary with input amplitude. An input-impedance boosting circuit reduces the loading imposed on the electrodes.

---

## Key Features

- Combines **VCO-based time-domain integration and multiphase quantization** to achieve second-order noise shaping
- Uses a **GIRO quantizer** to reduce mismatch sensitivity and improve linearity
- Supports a **400 mVpp input range**, providing headroom for motion artifacts and interference
- Uses input-dependent power consumption to reduce energy use when large artifacts are absent
- Combines AC coupling, chopping, and input-impedance boosting for biopotential acquisition
- Demonstrates **ECG, EOG, and EMG** measurements, including ECG recording in the presence of motion artifacts

---

## Key Performance

| Parameter | Performance |
| --- | ---: |
| Technology | 65 nm CMOS |
| Core area | 0.075 mm² |
| Analog / digital supply | 1.2 V / 0.8 V |
| Noise-shaping order | Second order |
| Input range | 400 mVpp |
| Sampling frequency | 200 kHz |
| Signal bandwidth | 1 kHz |
| Power consumption | 4.25–5.8 µW |
| Peak SNDR | 92.3 dB |
| Dynamic range | 92.3 dB |
| SFDR | 110.3 dB |
| Input-referred noise density | 110 nV/√Hz |
| Input impedance (DC / bandwidth edge) | 60 / 50 MΩ |
| CMRR | 100.2 dB |
| Schreier FoM | 174.7 dB |

---

## Summary

This work illustrates how **time-domain quantizer design, second-order noise shaping, and electrode-interface optimization** can work together in a direct-digitization biopotential front-end. The GIRO quantizer addresses mismatch-related linearity limitations, input-dependent power consumption reduces energy use during normal recording, and input-impedance boosting supports the electrode interface.

The wide input range helps prevent front-end saturation in the presence of motion artifacts; it does not directly remove those artifacts. Its benefit is to preserve the recorded waveform, including the underlying weak biopotential signal, for subsequent processing.

For a detailed analysis of the second-order VCO architecture, multiphase GIRO quantizer, input-dependent power consumption, and input-impedance boosting circuit, please refer to the **[full review document](paper.pdf)**.
