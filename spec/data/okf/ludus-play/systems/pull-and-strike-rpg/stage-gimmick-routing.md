---
type: "Ludus Gameplay System"
title: "ステージギミックと経路攻略"
description: "障害、減速、状態変化、目標条件を配置し、ユニット特性と経路選択を要求する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:stage-gimmick-routing"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

障害、減速、状態変化、目標条件を配置し、ユニット特性と経路選択を要求する。

# 設計思想

特定の解だけを強制せず、複数の通し方を残す。

# 主要機能

- 地形・障害ギミック
- 特性による対策
- 敵配置と優先目標

# UXへの寄与

- [攻略の発見](../../ux/cb70cb2e2b41d0d1.md)
- [編成の戦術性](../../ux/05d7e1e365a85deb.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [必殺ショットと使用機会](./special-shot.md) の後に実装する。
