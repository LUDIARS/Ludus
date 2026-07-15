---
type: "Ludus Gameplay System"
title: "アバター長期成長"
description: "レベル、装備、技能、実績をセッション横断で蓄積する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:avatar-progression"
genre_id: "genre:mmorpg"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

レベル、装備、技能、実績をセッション横断で蓄積する。

# 設計思想

復帰者が現行遊びへ追いつく経路を持つ。

# 主要機能

- レベル成長
- 装備更新
- 複数ビルド

# UXへの寄与

- [成長実感](../../ux/24fad9433dbd0365.md)
- [自己表現](../../ux/acdb56909eecad60.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [永続世界とシャード](./persistent-world.md) の後に実装する。
