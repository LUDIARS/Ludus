---
type: "Ludus Gameplay System"
title: "パーティ編成と相性"
description: "属性、役割、能力の組み合わせで出撃編成を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:party-composition"
genre_id: "genre:creature-collector"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

属性、役割、能力の組み合わせで出撃編成を作る。

# 設計思想

単一の数値最適化以外の編成理由を作る。

# 主要機能

- 編成枠
- 属性相性
- 交代規則

# UXへの寄与

- [戦略性](../../ux/8ded4fcfb58a7e88.md)
- [個性](../../ux/5bb32ea5a1a87ed3.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [名簿と保管](./roster-storage.md) の後に実装する。
