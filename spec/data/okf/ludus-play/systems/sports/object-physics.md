---
type: "Ludus Gameplay System"
title: "ボール・用具の物理"
description: "速度、回転、衝突を扱い、プレーの結果が予測と技術に応じて変わるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "sports"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:sports:object-physics"
genre_id: "genre:sports"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

速度、回転、衝突を扱い、プレーの結果が予測と技術に応じて変わるようにする。

# 設計思想

現実の完全再現より、競技として読み取れる一貫性を優先する。

# 主要機能

- 衝突と反発
- 回転・軌道
- 接触判定

# UXへの寄与

- [納得感](../../ux/daf702a77e8b6d75.md)
- [技術表現](../../ux/97930a0c352ea349.md)

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

- [選手・チーム操作](./player-team-control.md) の後に実装する。
