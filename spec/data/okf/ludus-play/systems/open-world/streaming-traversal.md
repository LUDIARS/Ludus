---
type: "Ludus Gameplay System"
title: "世界ストリーミングと移動"
description: "広い世界を継ぎ目なく読み込み、多様な移動手段で探索できるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:streaming-traversal"
genre_id: "genre:open-world"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

広い世界を継ぎ目なく読み込み、多様な移動手段で探索できるようにする。

# 設計思想

広さの数値でなく、移動中に発見が続く密度を設計する。

# 主要機能

- 領域ストリーミング
- 徒歩・乗り物移動
- 遠景と可視性

# UXへの寄与

- [自由感](../../ux/7a4cd99cf95c3f72.md)
- [没入感](../../ux/3492fbd7b49fd130.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
