---
title: "Paper Review: A Compact Photocurrent Recording IC With High-Linearity Dual PWM Buffered R-DACs"
date: 2026-09-03

authors:

- "Xinao Ji"

summary: "A compact, high-dynamic-range photocurrent recording IC fabricated in 90 nm CMOS, featuring a passive integrator, VCO quantizer, and coarse-fine feedback R-DACs."

tags:

- Wearable Biomedical ICs Review
- Wearable Biomedical ICs
- Photocurrent Recording
- PPG
- VCO-Based ADC
- PWM DAC

---

## Paper

**A Compact Photocurrent Recording IC With High-Linearity Dual PWM Buffered R-DACs**

**Reviewer:** Xinao Ji

**Full review:** [View the Review Document (PDF)](paper.pdf)

---

## Introduction

This paper presents a compact readout IC for **photocurrent recording applications such as PPG**. Fabricated in **90 nm CMOS**, the chip combines a passive integrator, a VCO-based quantizer, and a digital feedback loop to balance wide dynamic range, low power consumption, and small area.

Unlike a conventional TIA + ADC architecture, this work shifts much of the signal-processing burden to the time and digital domains. The passive integrator accumulates the difference between the input and feedback currents, while the VCO quantizer performs time-domain conversion. Coarse and fine buffered R-DACs handle the large background current and the small residual error, respectively, thereby providing both a wide input range and fine current resolution.

---

## Key Features

- A **passive integrator and VCO quantizer** form a direct photocurrent digitization path without requiring a high-performance operational amplifier in the first stage
- The VCO quantizer provides first-order noise shaping and, together with a digital differentiator, realizes second-order quantization-noise shaping
- An **8-bit coarse buffered R-DAC** handles large background currents of approximately 1–256 µA
- Two **9-bit PWM fine DACs** provide fine feedback control for currents below 1 µA
- Dual PWM pulses suppress the even-order harmonics associated with conventional single PWM operation, improving feedback-DAC linearity
- Counter initialization and complementary-code generation produce the dual PWM signals without two high-speed digital comparators, limiting the high-speed PWM logic power to approximately 2 µW
- Digital loop-gain calibration compensates for bandwidth variation caused by input parasitic capacitance
- Saturation detection and a fast-settling feedforward path reduce recovery time after abrupt input-current changes
- PPG measurements under an approximately 108 µA DC background current clearly resolve the systolic and diastolic peaks

---

## Performance Summary

| Parameter | Performance |
| --- | ---: |
| Technology | 90 nm CMOS |
| Core Area | 0.067 mm² |
| Analog / Digital Supply | 1.2 V / 0.7 V |
| Measured Sampling Frequency | 73.2 kHz |
| PWM Clock Frequency | 37.5 MHz |
| Current Resolution | 15.6 pA |
| Maximum AC Input Without Coarse-Range Extension | Approximately 1 µA |
| Coarse-DAC Input Range | Approximately 1–256 µA |
| Base Dynamic Range | 95.92 dB |
| Extended Dynamic Range | 144 dB |
| Peak SNDR | 87.66 dB |
| High-Speed PWM Digital Power | Approximately 2 µW |
| DC Baseline in PPG Measurement | Approximately 108 µA |

---

## Summary

This work is a representative example of a **high-dynamic-range direct-digitization photocurrent front end**. Its central idea is to shift the area and power burden of a conventional analog current readout into the time and digital domains. The passive integrator performs low-power current integration, the VCO quantizer provides time-domain conversion, the coarse R-DAC cancels large background currents, and the dual PWM fine DAC uses time resolution to achieve fine feedback-current resolution.

The dual PWM approach reduces the number of analog elements required by the fine DAC and suppresses even-order harmonics through symmetric pulse placement. The digital IIR feedback loop, loop-gain calibration, and saturation feedforward path further maintain the system’s dynamic performance in the presence of parasitic capacitance and large input-current transitions.

Overall, the work demonstrates how passive integration, time-domain quantization, digital feedback, and coarse-fine DACs can be combined into a compact photocurrent acquisition system suitable for wearable PPG applications.

For a detailed discussion of the passive integrator, VCO-based quantizer, dual PWM buffered R-DAC, digital loop-gain calibration, and saturation-detection feedforward path, please refer to the **[full review document](paper.pdf)**.
