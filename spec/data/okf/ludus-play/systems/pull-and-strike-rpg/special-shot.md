---
type: "Ludus Gameplay System"
title: "必殺ショットと使用機会"
description: "個別ユニットの強力な能力を、使用可能な機会とコストのもとで戦術判断に変える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:special-shot"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

個別ユニットの強力な能力を、使用可能な機会とコストのもとで戦術判断に変える。

# 設計思想

単なる高火力ではなく、局面を読み替える選択肢として扱う。

# 主要機能

- ユニット固有能力
- 使用可能ターン・条件
- 発動結果の演出

# UXへの寄与

- [逆転の期待](../../ux/ab1bb84b02c1f8b7.md)
- [個性の愛着](../../ux/c572507cce921353.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [味方接触コンボ](./ally-combo-trigger.md) の後に実装する。
