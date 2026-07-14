---
type: "Ludus Gameplay System"
title: "自機操作と当たり判定"
description: "移動速度、当たり判定、ボムなどを制御し、精密な回避を可能にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:player-control"
genre_id: "genre:shmup"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

移動速度、当たり判定、ボムなどを制御し、精密な回避を可能にする。

# 設計思想

見た目の大きさでなく、回避の読みやすさを優先する。

# 主要機能

- 移動速度切替
- ヒットボックス
- 緊急回避資源

# UXへの寄与

- [精密操作](../../ux/c29909653a961b12.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
