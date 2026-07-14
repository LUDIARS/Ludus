---
type: "Ludus Gameplay System"
title: "弾幕パターン"
description: "敵弾の発射規則と軌道を組み合わせ、読める危険と攻略余地を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:bullet-pattern"
genre_id: "genre:shmup"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵弾の発射規則と軌道を組み合わせ、読める危険と攻略余地を作る。

# 設計思想

避けられない量ではなく、学習可能な構造を設計する。

# 主要機能

- 発射間隔
- 軌道・速度変化
- 予兆と安全地帯

# UXへの寄与

- [緊張と集中](../../ux/dfc6f9307a841d9d.md)
- [攻略の喜び](../../ux/1eb04611b6a60d48.md)

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

- [自機操作と当たり判定](./player-control.md) の後に実装する。
