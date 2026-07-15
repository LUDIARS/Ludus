---
type: "Ludus Gameplay System"
title: "速度曲線と難度調整"
description: "進行に応じて速度・密度・猶予を変化させ、短い試行に明確な山場を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:speed-curve"
genre_id: "genre:runner"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

進行に応じて速度・密度・猶予を変化させ、短い試行に明確な山場を作る。

# 設計思想

急な理不尽で終わらせず、学習に合わせて緊張を上げる。

# 主要機能

- 速度上昇
- 密度調整
- 救済区間

# UXへの寄与

- [集中の高まり](../../ux/9d6f0ad4816c2116.md)
- [挑戦意欲](../../ux/3271670179421220.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [コース生成](./procedural-track.md) の後に実装する。
