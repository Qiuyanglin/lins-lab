---
title: "Paper Review: A 2.5–20 kS/s In-Pixel Direct Digitization ECoG Front End With Submillisecond Stimulation Artifact Recovery"
date: 2026-08-31

authors:

- "Yiru Wang"

summary: "An eight-channel ECoG recording front end fabricated in 180 nm CMOS, featuring in-pixel direct digitization and submillisecond stimulation artifact recovery."

tags:

- Neural Interface Review
- Neural Interface
- Neural Recording
- ECoG
- Direct Digitization
- Stimulation Artifact Recovery

---

## Paper

**A 2.5–20 kS/s In-Pixel Direct Digitization ECoG Front End With Submillisecond Stimulation Artifact Recovery**

**Reviewer:** Yiru Wang

**Full review:** [View the Review Document (PDF)](paper.pdf)

---

## Introduction

This paper presents an eight-channel ECoG recording front end fabricated in **180 nm CMOS**. A second-order continuous-time ΔΣ modulator and a decimation filter are integrated within each pixel, supporting four recording modes from **2.5 to 20 kS/s**.

Rather than relying solely on a wider input dynamic range or a complex artifact-cancellation path, this work addresses the **phase wrapping and slow recovery** that can occur when a large stimulation artifact overloads a time-domain quantizer. A fast-recovery phase quantizer with overrange detection allows the system to return to stable recording after a brief period of saturation.

---

## Key Features

- In-pixel second-order **CT-ΔΣ ADC** for direct digitization of neural signals
- **Pseudo-Virtual-Ground Feedforward (PVG FF)** architecture for reduced DAC overhead and improved linearity and area efficiency
- Chopper-stabilized complementary-input **Gm-C integrator** as the first stage
- **CCO-based** time-domain integrator as the second stage
- Fast-recovery phase quantizer with overrange detection to prevent phase wrapping and modulator instability
- Four recording modes at 2.5, 5, 10, and 20 kS/s, with proportional power scaling across bandwidths
- Per-pixel third-order **CIC decimation filter** providing 64× data-rate reduction
- In vivo rat experiments demonstrating simultaneous stimulation and recording with rapid post-artifact recovery

---

## Performance Summary

| Parameter | Performance |
| --- | ---: |
| Technology | 180 nm CMOS |
| Array Size | 4 × 2 (8 channels) |
| ADC Architecture | In-pixel second-order CT-ΔΣ ADC |
| Output Sampling Rate | 2.5–20 kS/s |
| Signal Bandwidth | 1.25–10 kHz |
| Pixel Area | 0.09 mm²/pixel |
| Power Consumption | 14 µW/pixel |
| Analog / Digital Supply | 0.9 V / 0.7 V |
| Input-Referred Noise | 6 µVrms |
| ADC SNDR / DR | 78.6 dB / 78.6 dB |
| ADC SFDR | 97.7 dBc |
| Stimulation Artifact Recovery Time | 0.05–0.4 ms |
| In-Pixel Decimation Filter | Third-order CIC, 64× |

---

## Summary

This work is a strong example of a **fast-recovery direct-digitization neural front end**. Its key contribution is not to keep every large stimulation artifact within the ADC input range. Instead, it prevents phase wrapping in the time-domain quantizer after an overrange event, allowing normal recording to resume within one decimated output sample.

The design also combines scalable Gm-C and CCO circuits, per-pixel decimation, and distributed timing generation to support multiple recording bandwidths, proportional power scaling, and future expansion toward large-scale arrays.

For a detailed discussion of the PVG FF architecture, Gm-C integrator, CCO, fast-recovery phase quantizer, and digital back end, please refer to the **[full review document](paper.pdf)**.
