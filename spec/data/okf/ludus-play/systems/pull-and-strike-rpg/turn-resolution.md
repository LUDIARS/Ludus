---
type: "Ludus Gameplay System"
title: "ターン進行とショット解決"
description: "手番、ショット後の状態変化、敵行動、勝敗を順序どおりに解決する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:turn-resolution"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

手番、ショット後の状態変化、敵行動、勝敗を順序どおりに解決する。

# 設計思想

リアルタイム反射ではなく、考える時間を持つアクションにする。

# 主要機能

- 手番順
- ショット後の状態更新
- 敵行動と勝敗判定

# UXへの寄与

- [見通し](../../ux/7fb4b30947b02823.md)
- [戦略性](../../ux/8ded4fcfb58a7e88.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [衝突・反射・貫通の解決](./collision-and-reflection.md) の後に実装する。
