---
type: "Ludus Gameplay System"
title: "台本とシーン再生"
description: "文章、立ち絵、背景、音声、演出を時系列に再生して場面を成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:script-scene"
genre_id: "genre:visual-novel"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

文章、立ち絵、背景、音声、演出を時系列に再生して場面を成立させる。

# 設計思想

演出は文章の理解を支え、読ませる速度を奪わない。

# 主要機能

- 台本イベント列
- 話者・表示状態
- 音声と演出の同期

# UXへの寄与

- [読書への没入](../../ux/9c5693b8049fb14c.md)
- [情景理解](../../ux/0c6562e8de5cc039.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [情報とUI](../../domains/information-and-ui.md)
- [音とリズム](../../domains/audio-and-rhythm.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
