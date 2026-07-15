---
type: "Ludus Gameplay System"
title: "自動移動とレーン操作"
description: "前進を自動化し、レーン移動・ジャンプ・スライドに判断を集中させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:auto-lane-control"
genre_id: "genre:runner"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

前進を自動化し、レーン移動・ジャンプ・スライドに判断を集中させる。

# 設計思想

移動の手間を省き、瞬間の判断を遊びにする。

# 主要機能

- 自動前進
- レーン切替
- ジャンプ・スライド

# UXへの寄与

- [即応性](../../ux/52d11bf91e4eced8.md)
- [理解しやすさ](../../ux/135fe683c520de16.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
