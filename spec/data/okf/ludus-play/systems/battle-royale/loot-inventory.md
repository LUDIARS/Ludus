---
type: "Ludus Gameplay System"
title: "戦利品とインベントリ"
description: "探索で得た装備を選別・管理し、準備と生存力のトレードオフを作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:loot-inventory"
genre_id: "genre:battle-royale"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

探索で得た装備を選別・管理し、準備と生存力のトレードオフを作る。

# 設計思想

希少性だけでなく、今の戦況との適合で価値を決める。

# 主要機能

- ランダム配置
- 装備比較
- 容量と回復資源

# UXへの寄与

- [発見の高揚](../../ux/84ad0b94100ce6a8.md)
- [選択の重み](../../ux/afd5d3c7460e8707.md)

# ドメイン要素

- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [降下・危険区域](./deployment-zone.md) の後に実装する。
