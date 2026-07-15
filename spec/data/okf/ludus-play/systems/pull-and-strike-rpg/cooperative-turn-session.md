---
type: "Ludus Gameplay System"
title: "協力ターンセッション"
description: "複数人が同じ盤面と手番を共有し、順番にショットして共同でクエストを進める。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:cooperative-turn-session"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

複数人が同じ盤面と手番を共有し、順番にショットして共同でクエストを進める。

# 設計思想

同時入力の速さより、次の人に残す盤面を考える協力にする。

# 主要機能

- 共有ステージ状態
- 参加者ごとの手番
- 協力報酬と再参加

# UXへの寄与

- [協力感](../../ux/0b38736654c4c3bc.md)
- [共有の高揚](../../ux/de525c1734c05328.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [対人関係とセッション](../../domains/social-and-session.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [ステージギミックと経路攻略](./stage-gimmick-routing.md) の後に実装する。
