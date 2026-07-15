---
type: "Ludus Gameplay System"
title: "装備品質と特性"
description: "基礎型、希少度、特性の組み合わせで装備差を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:procedural-affix"
genre_id: "genre:looter-shooter"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

基礎型、希少度、特性の組み合わせで装備差を作る。

# 設計思想

数値差とプレイスタイル差を区別する。

# 主要機能

- アイテムレベル
- ランダム特性
- 比較表示

# UXへの寄与

- [発見](../../ux/eff44e759df967c5.md)
- [判断](../../ux/65ae7e60a3f2eb10.md)

# ドメイン要素

- [リソースと経済](../../domains/resources-and-economy.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)

# 実装上の前提

- [戦闘・戦利品循環](./combat-loot-loop.md) の後に実装する。
