# Homepage research images

These images illustrate research areas; the cards link to example papers, not an exhaustive or ranked selection. Cards are ordered by publication date, newest first.

- `research-nanopore-application-cartoon.png`: a label-free conceptual adaptation of the author-supplied journal manuscript's Figure 2(a), made with the built-in imagegen tool at the author's request. The flat cartoon illustration focuses on DNA, the nanopore and ions; circuit annotations are omitted to match the other application figures. It is not a device photograph or measured result. The publication link remains the published VLSI 2026 conference paper. The unchanged extracted source is `research-nanopore-principle.png`; the final editing prompt is recorded in `research-nanopore-cartoon.prompt.txt`.
- `research-chest-ppg-application.jpg`: Figure 2 of the subsequent JTEHM 2024 application paper, DOI `10.1109/JTEHM.2024.3471468`, extracted unchanged from the author's local PDF. The chest-worn sensor illustration provides application context for the ISSCC 2021 readout paper.
- `research-bioreactor-overview.jpg`: Figure 21.2.1, ISSCC 2023, DOI `10.1109/ISSCC42615.2023.10067298`, extracted unchanged from the author's local PDF. The homepage displays the bioreactor application panel.
- `selected-neural-cicc2026.png`: the existing `content/post/CICC26/Invasive.png`, showing the brain/electrode portion of the CICC 2026 review's Figure 1, DOI `10.1109/CICC65509.2026.11509514`.

The other source images remain intact. Hugo performs thumbnail cropping and WebP conversion. No measured data are edited.

## Paper-review topic illustrations

The bilingual reading directory reuses the same wearable PPG, neural-interface,
and bioreactor application illustrations as the homepage and research page.
The bioreactor uses the same `405x673 TopLeft` application-panel crop. Images are
shown in white 4:3 frames with padding and contain sizing to preserve the subject.
The four original reading-topic `cover.png` files are retained for existing URLs.

`reading-data-converters.png` is a conceptual illustration generated with the
built-in imagegen tool: a smooth waveform, an unmarked chip and a staircase
waveform on a white background. It represents a reading topic, not a particular
device, circuit schematic or measured result. The exact generation prompt is
recorded in `reading-data-converters.prompt.txt`. Shared image mappings and
bilingual alternative text are kept in `data/reading_topics.json`.
