---
type: "Ludus Gameplay System"
title: "配置と生活利用"
description: "拠点、生産、移動へ個体の特性を割り当てる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:habitat-work"
genre_id: "genre:creature-collector"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

拠点、生産、移動へ個体の特性を割り当てる。

# 設計思想

個体を単なる数値装置にせず状態を可視化する。

# 主要機能

- 適性配置
- 作業キュー
- 休息と状態

# UXへの寄与

- [共生感](../../ux/3a2d4cfad3d4c2b4.md)
- [効率化](../../ux/b8b89a59307d671e.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [育成と進化](./growth-evolution.md) の後に実装する。
