---
type: "Ludus Gameplay System"
title: "介入手段の選択"
description: "回避、撹乱、気絶、排除のコストと痕跡を差別化する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:intervention-choice"
genre_id: "genre:stealth"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

回避、撹乱、気絶、排除のコストと痕跡を差別化する。

# 設計思想

各手段に短期と長期の代償を持たせる。

# 主要機能

- 注意誘導
- 非致死手段
- 痕跡処理

# UXへの寄与

- [自己表現](../../ux/acdb56909eecad60.md)
- [因果感](../../ux/427fbf43f2d5dd88.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [遮蔽と潜入経路](./cover-traversal.md) の後に実装する。
