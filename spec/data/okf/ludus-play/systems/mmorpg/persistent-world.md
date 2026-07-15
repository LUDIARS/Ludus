---
type: "Ludus Gameplay System"
title: "永続世界とシャード"
description: "多数の参加者が共有する世界状態を分割、保存、復旧する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:persistent-world"
genre_id: "genre:mmorpg"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

多数の参加者が共有する世界状態を分割、保存、復旧する。

# 設計思想

技術的な分割が社会関係を壊さないようにする。

# 主要機能

- シャード
- 永続状態
- 混雑制御

# UXへの寄与

- [世界感](../../ux/b61a2d148fc730d3.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
