---
type: "Ludus Gameplay System"
title: "ミッションインスタンス"
description: "目標、遭遇、難度補正、報酬を一つの再参加可能な単位にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:mission-instance"
genre_id: "genre:looter-shooter"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

目標、遭遇、難度補正、報酬を一つの再参加可能な単位にする。

# 設計思想

所要時間と期待報酬を事前に示す。

# 主要機能

- 目標列
- 難度修飾
- チェックポイント

# UXへの寄与

- [区切り](../../ux/2999742a6b03605a.md)
- [再挑戦](../../ux/1b63b66107b9eccc.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ロードアウトとビルド](./loadout-build.md) の後に実装する。
