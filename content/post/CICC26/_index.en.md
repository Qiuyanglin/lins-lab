---
title: CICC 2026 Review Paper on Neural Interface Circuits Published
date: 2026-05-22

image:
  filename: CICC_neural_interface.png
  focal_point: 'top'
  caption: "Overview of circuit architectures for next-generation neural interfaces"
---

A review paper co-authored by Dr. Qiuyang Lin on **next-generation neural interface circuit architectures** has been published at the **IEEE Custom Integrated Circuits Conference (CICC) 2026**.

The paper, entitled **“Circuit Architectures for Next-Generation Neural Interfaces: Recording, Stimulation, and Closed-Loop Neuromodulation”**, provides a systematic review of integrated circuit architectures and key circuit techniques for next-generation **brain–computer interfaces, neuroprosthetics, neuromodulation systems, and fundamental neuroscience research**.

<!--more-->

![CICC Logo](CICC.png)

![Neural Interfaces](Invasive.png)

The review focuses on three core functions in modern neural interface systems:

- **Neural signal recording**
- **Neural stimulation**
- **Closed-loop neuromodulation**

The paper highlights that, as neural interface systems continue to scale toward **higher channel counts, higher integration density, lower power consumption, and smaller area**, circuit designers must carefully balance noise, power, area, dynamic range, input impedance, and tolerance to stimulation artifacts.

For **neural recording front-end circuits**, the paper discusses several readout architectures for high-density neural probes, including:

- Conventional **analog front-end + time-multiplexed ADC** architectures
- **Direct-digitization front-end (DDFE)** architectures
- Area-efficient architectures based on **electrode multiplexing**
- Low-noise, low-power, and high-dynamic-range readout techniques for large-scale neural arrays

These architectures enable high-fidelity acquisition of various neural signals, ranging from local field potentials (LFPs) and electrocorticography (ECoG) to action potentials (APs/spikes).

For **in vitro CMOS microelectrode arrays (MEAs)**, the paper summarizes the development of multimodal MEA systems. In addition to high-density electrophysiological recording, modern MEA platforms increasingly integrate:

- Cell electroporation
- Impedance spectroscopy
- High-throughput cellular sensing
- Interfaces for 3D organoids and complex neural networks

These techniques allow CMOS MEAs not only to record neural network activity, but also to characterize cellular morphology, migration, adhesion, contractility, and the behavior of non-electrogenic cells.

For **neural stimulation and closed-loop neuromodulation**, the paper further analyzes the design challenges of neural stimulators implemented in high-voltage/BCD technologies, including:

- High-compliance-voltage output
- Biphasic stimulation waveforms
- Passive and active charge balancing
- Implant safety
- Area and power optimization for multichannel stimulation systems

For closed-loop neural interface systems, the review emphasizes the importance of **stimulation artifact suppression and fast post-stimulation recovery**. Closed-loop systems must quickly recover neural recording capability during or after stimulation, which places stringent requirements on the dynamic range, common-mode interference suppression, automatic reset, and artifact tolerance of the recording front-end.

The paper also reviews recent progress in **artifact-tolerant neural recording front-ends**, covering the evolution from feedforward common-mode suppression and feedback common-mode cancellation loops to multichannel shared common-mode suppression architectures. These developments illustrate the trend of neural interface circuits toward **higher robustness, higher channel density, and real-time closed-loop neuromodulation**.

This work reflects Dr. Qiuyang Lin’s continued contributions to the following research directions:

- Brain–computer interface integrated circuits
- High-density neural recording front-ends
- CMOS neural probes and microelectrode arrays
- Neural stimulation and closed-loop neuromodulation
- Low-noise and low-power analog/mixed-signal circuits
- Biomedical electronic systems and intelligent neural interfaces

Moving forward, the lab will continue to advance research on **next-generation brain–computer interfaces and biomedical integrated circuits**, promoting highly integrated, energy-efficient, and intelligent systems for neural recording, neural stimulation, closed-loop neuromodulation, and multimodal biosensing.
