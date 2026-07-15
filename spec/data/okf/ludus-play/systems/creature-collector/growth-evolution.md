---
type: "Ludus Gameplay System"
title: "育成と進化"
description: "経験、訓練、条件達成で能力や形態を変化させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:growth-evolution"
genre_id: "genre:creature-collector"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

経験、訓練、条件達成で能力や形態を変化させる。

# 設計思想

不可逆選択には事前情報か回復手段を用意する。

# 主要機能

- レベル成長
- 能力習得
- 分岐進化

# UXへの寄与

- [成長実感](../../ux/24fad9433dbd0365.md)
- [選択の重み](../../ux/afd5d3c7460e8707.md)

# ドメイン要素

- [目的と成長](../../domains/objectives-and-progression.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [パーティ編成と相性](./party-composition.md) の後に実装する。
