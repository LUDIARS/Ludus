---
type: "Ludus Gameplay System"
title: "非対称役割と能力"
description: "陣営ごとに異なる操作、能力、人数、目標を定義する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:role-asymmetry"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

陣営ごとに異なる操作、能力、人数、目標を定義する。

# 設計思想

各役割に独立した成功体験を与える。

# 主要機能

- 陣営別ルール
- 能力差
- 人数差

# UXへの寄与

- [役割没入](../../ux/f09ce87e7188f26a.md)
- [再遊性](../../ux/19fb6b3cbc7ad2e6.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
