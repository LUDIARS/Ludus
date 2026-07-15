---
type: "Ludus Gameplay System"
title: "複数目標と時間圧"
description: "一方の集中を別目標で崩し、停滞しない試合を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:objective-pressure"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

一方の集中を別目標で崩し、停滞しない試合を作る。

# 設計思想

キャンプ行動に機会費用を与える。

# 主要機能

- 並行目標
- 進捗公開
- 制限時間

# UXへの寄与

- [判断](../../ux/65ae7e60a3f2eb10.md)
- [焦燥感](../../ux/0f8a05a9724e61ac.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [追跡と逃走](./pursuit-evasion.md) の後に実装する。
