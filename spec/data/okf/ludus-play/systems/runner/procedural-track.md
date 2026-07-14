---
type: "Ludus Gameplay System"
title: "コース生成"
description: "障害物と収集物の並びをルールに従って生成し、繰り返し遊んでも新しい判断を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:procedural-track"
genre_id: "genre:runner"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

障害物と収集物の並びをルールに従って生成し、繰り返し遊んでも新しい判断を作る。

# 設計思想

ランダム性より、必ず解けるリズムを優先する。

# 主要機能

- 安全性制約
- 難度区間
- パターンプール

# UXへの寄与

- [新鮮さ](../../ux/5fac095be655d7fb.md)
- [公平感](../../ux/761295392476961e.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [音とリズム](../../domains/audio-and-rhythm.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [収集物とスコア](./pickup-score.md) の後に実装する。
