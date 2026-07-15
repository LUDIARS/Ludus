---
type: "Ludus Gameplay System"
title: "手札・盤面・山札の状態"
description: "カードや駒の位置・所有・可視性を追跡し、プレイの根拠を保つ。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:hand-table-state"
genre_id: "genre:board-card"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

カードや駒の位置・所有・可視性を追跡し、プレイの根拠を保つ。

# 設計思想

情報量を減らすのでなく、読み解ける構造に整える。

# 主要機能

- 手札管理
- 山札・捨て札
- 盤面配置

# UXへの寄与

- [状況理解](../../ux/43b64ffb933bcf23.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ルール解決と例外処理](./rule-resolution.md) の後に実装する。
