---
type: "Ludus Gameplay System"
title: "試合進行と競技規則"
description: "得点、反則、時間、ラウンドを判定して、競技の緊張と公平性を成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "sports"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:sports:match-rules"
genre_id: "genre:sports"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

得点、反則、時間、ラウンドを判定して、競技の緊張と公平性を成立させる。

# 設計思想

規則を見えない制約にせず、状況判断の材料として伝える。

# 主要機能

- 時間・ピリオド管理
- 反則判定
- 勝敗決定

# UXへの寄与

- [緊張感](../../ux/d3504ee04079ad32.md)
- [公平感](../../ux/761295392476961e.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ボール・用具の物理](./object-physics.md) の後に実装する。
