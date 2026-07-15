---
type: "Ludus Gameplay System"
title: "選手・チーム操作"
description: "直接操作と選手切替を組み合わせ、意図したプレーを素早く実行できるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "sports"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:sports:player-team-control"
genre_id: "genre:sports"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

直接操作と選手切替を組み合わせ、意図したプレーを素早く実行できるようにする。

# 設計思想

入力の複雑さより、競技らしい意思決定を優先する。

# 主要機能

- 選手切替
- パス・シュート入力
- 味方への指示

# UXへの寄与

- [操作の一体感](../../ux/da50318696a92ee0.md)
- [戦術性](../../ux/96f64b2a0f1c2b61.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
