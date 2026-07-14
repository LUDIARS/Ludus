---
type: "Ludus Gameplay System"
title: "環境パズルと解決判定"
description: "観察した規則と持ち物を使い、障害を解く進行の節目を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:puzzle-resolution"
genre_id: "genre:adventure"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

観察した規則と持ち物を使い、障害を解く進行の節目を作る。

# 設計思想

答えを隠すより、問題の構造を読ませる。

# 主要機能

- 状態条件の判定
- 段階的ヒント
- 解決時の世界変化

# UXへの寄与

- [ひらめき](../../ux/19715a5cdc003848.md)
- [停滞の緩和](../../ux/8a1f3f7a1f65c67f.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [手がかりと知識管理](./clue-knowledge.md) の後に実装する。
